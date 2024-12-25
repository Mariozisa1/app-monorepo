import { Buffer } from 'buffer';
import { DEFAULT_VERIFY_STRING } from '@onekeyhq/shared/src/consts/dbConsts';
import bufferUtils from '@onekeyhq/shared/src/utils/bufferUtils';
import {
  batchGetPrivateKeys,
  batchGetPublicKeys,
  batchGetPublicKeysAsync,
  decryptRevealableSeed,
  encryptRevealableSeed,
  CKDPriv,
  encrypt,
  decrypt,
  publicFromPrivate,
  mnemonicFromEntropyAsync,
  mnemonicToSeedAsync,
  generateRootFingerprintHexAsync,
  EMnemonicType,
  mnemonicToSeedSync,
  revealableSeedFromMnemonic,
  mnemonicToRevealableSeed,
  CKDPub,
  compressPublicKey,
  decryptImportedCredential,
  encryptImportedCredential,
  decryptVerifyString,
  encryptVerifyString,
  fixV4VerifyStringToV5,
  generateMasterKeyFromSeed,
  N,
} from '../index';
import type { IBip32ExtendedKey } from '../bip32';

import type { ICurveName, ICoreImportedCredential } from '../../types';
import type { IBip39RevealableSeed } from '../bip39';
import { parse256, ser256 } from '../bip32';
// Mock platform environment and globals
const platformEnv = {
  isNative: false,
};

const appGlobals = {
  $webembedApiProxy: undefined,
};
describe('Secret Module Tests', () => {
  describe('CKDPriv Tests', () => {
    const testPassword = 'password123';
    const testSeed = Buffer.from('000102030405060708090a0b0c0d0e0f', 'hex');
    
    // Test vectors based on BIP32 test vectors
    const masterKey = {
      key: Buffer.from('e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35', 'hex'),
      chainCode: Buffer.from('873dff81c02f525623fd1fe5167eac3a55a049de3d314bb42ee227ffed37d508', 'hex')
    };

    it('should derive normal child key for secp256k1', () => {
      const encryptedParent = {
        key: encrypt(testPassword, masterKey.key),
        chainCode: masterKey.chainCode
      };
      
      const childKey = CKDPriv('secp256k1', encryptedParent, 0, testPassword);
      
      // Decrypt and verify the derived key
      const decryptedKey = decrypt(testPassword, childKey.key);
      expect(decryptedKey.length).toBe(32);
      expect(childKey.chainCode.length).toBe(32);
      
      // Verify we can generate valid public key from it
      const publicKey = publicFromPrivate('secp256k1', childKey.key, testPassword);
      expect(publicKey.length).toBeGreaterThan(0);
    });

    it('should derive hardened child key for secp256k1', () => {
      const encryptedParent = {
        key: encrypt(testPassword, masterKey.key),
        chainCode: masterKey.chainCode
      };
      
      const hardenedIndex = 0x80000000; // 2^31
      const childKey = CKDPriv('secp256k1', encryptedParent, hardenedIndex, testPassword);
      
      const decryptedKey = decrypt(testPassword, childKey.key);
      expect(decryptedKey.length).toBe(32);
      expect(childKey.chainCode.length).toBe(32);
    });

    it('should only support hardened derivation for ed25519', () => {
      const encryptedParent = {
        key: encrypt(testPassword, masterKey.key),
        chainCode: masterKey.chainCode
      };
      
      // Normal index should throw
      expect(() => {
        CKDPriv('ed25519', encryptedParent, 0, testPassword);
      }).toThrow('Only hardened CKDPriv is supported for ed25519');
      
      // Hardened index should work
      const hardenedIndex = 0x80000000;
      const childKey = CKDPriv('ed25519', encryptedParent, hardenedIndex, testPassword);
      expect(childKey.key.length).toBe(32);
      expect(childKey.chainCode.length).toBe(32);
    });

    it('should throw error for invalid index', () => {
      const encryptedParent = {
        key: encrypt(testPassword, masterKey.key),
        chainCode: masterKey.chainCode
      };
      
      expect(() => {
        CKDPriv('secp256k1', encryptedParent, -1, testPassword);
      }).toThrow('Invalid index');
      
      expect(() => {
        CKDPriv('secp256k1', encryptedParent, 2 ** 32, testPassword);
      }).toThrow('Invalid index');
      
      expect(() => {
        CKDPriv('secp256k1', encryptedParent, 1.5, testPassword);
      }).toThrow('Invalid index');
    });

    it('should derive child key for nistp256', () => {
      const encryptedParent = {
        key: encrypt(testPassword, masterKey.key),
        chainCode: masterKey.chainCode
      };
      
      const childKey = CKDPriv('nistp256', encryptedParent, 0, testPassword);
      
      const decryptedKey = decrypt(testPassword, childKey.key);
      expect(decryptedKey.length).toBe(32);
      expect(childKey.chainCode.length).toBe(32);
      
      // Verify chain code is different from parent
      expect(childKey.chainCode).not.toEqual(masterKey.chainCode);
      
      // Verify we can derive multiple children
      const secondChild = CKDPriv('nistp256', childKey, 1, testPassword);
      expect(secondChild.key.length).toBeGreaterThan(0);
      expect(secondChild.chainCode.length).toBe(32);
    });

    it('should derive child private keys correctly using CKDPriv', () => {
      const password = 'password123';
      const testMnemonic = 'test test test test test test test test test test test junk';
      const rs = mnemonicToRevealableSeed(testMnemonic);
      const hdCredential = encryptRevealableSeed({
        rs,
        password,
      });

      // Get seed from hdCredential
      const { seed } = decryptRevealableSeed({
        rs: hdCredential,
        password,
      });
      const seedBuffer = Buffer.from(seed, 'hex');

      // Test normal index derivation with secp256k1
      const masterKey = {
        key: encrypt(password, Buffer.from('0123456789abcdef0123456789abcdef', 'hex')),
        chainCode: Buffer.from('0123456789abcdef0123456789abcdef', 'hex'),
      };
      
      const childKey = CKDPriv('secp256k1', masterKey, 0, password);
      expect(childKey).toBeDefined();
      expect(childKey.key).toBeInstanceOf(Buffer);
      expect(childKey.chainCode).toBeInstanceOf(Buffer);

      // Test hardened index derivation
      const hardenedIndex = 2147483648; // 2^31, first hardened index
      const hardenedChild = CKDPriv('secp256k1', masterKey, hardenedIndex, password);
      expect(hardenedChild).toBeDefined();
      expect(hardenedChild.key).toBeInstanceOf(Buffer);
      expect(hardenedChild.chainCode).toBeInstanceOf(Buffer);

      // Test with different curves
      const nistMasterKey = {
        key: encrypt(password, Buffer.from('0123456789abcdef0123456789abcdef', 'hex')),
        chainCode: Buffer.from('0123456789abcdef0123456789abcdef', 'hex'),
      };
      const nistChild = CKDPriv('nistp256', nistMasterKey, 0, password);
      expect(nistChild).toBeDefined();

      const edMasterKey = {
        key: encrypt(password, Buffer.from('0123456789abcdef0123456789abcdef', 'hex')),
        chainCode: Buffer.from('0123456789abcdef0123456789abcdef', 'hex'),
      };
      // ed25519 only supports hardened derivation
      const edChild = CKDPriv('ed25519', edMasterKey, hardenedIndex, password);
      expect(edChild).toBeDefined();

      // Test error cases
      expect(() => CKDPriv('ed25519', edMasterKey, 0, password)).toThrow();
      expect(() => CKDPriv('invalid-curve' as any, masterKey, 0, password)).toThrow();
      expect(() => CKDPriv('secp256k1', masterKey, -1, password)).toThrow();

      // Test CKDPub function
      describe('CKDPub', () => {
        it('should derive child public keys correctly', () => {
          const parentKey = {
            key: Buffer.from('0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', 'hex'),
            chainCode: Buffer.from('0123456789abcdef0123456789abcdef', 'hex'),
          };

          const childKey = CKDPub('secp256k1', parentKey, 0);
          expect(childKey).toBeDefined();
          expect(childKey.key).toBeInstanceOf(Buffer);
          expect(childKey.chainCode).toBeInstanceOf(Buffer);

          // Test with different curves
          const nistParentKey = {
            key: Buffer.from('03b5d465bc991d8f0f7fa68dafa4cce5e3c57e3d0d70b3c1b6f9e4e57aed0b1a87', 'hex'),
            chainCode: Buffer.from('0123456789abcdef0123456789abcdef', 'hex'),
          };
          const nistChildKey = CKDPub('nistp256', nistParentKey, 0);
          expect(nistChildKey).toBeDefined();
          expect(nistChildKey.key).toBeInstanceOf(Buffer);
          expect(nistChildKey.chainCode).toBeInstanceOf(Buffer);

          // Test error cases
          expect(() => CKDPub('invalid-curve' as any, parentKey, 0)).toThrow();
          expect(() => CKDPub('secp256k1', parentKey, -1)).toThrow();
          expect(() => CKDPub('secp256k1', parentKey, 2147483648)).toThrow(); // Hardened index not allowed
        });

        it('should match snapshot for public key derivation', () => {
          const parentKey = {
            key: Buffer.from('0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', 'hex'),
            chainCode: Buffer.from('0123456789abcdef0123456789abcdef', 'hex'),
          };
          expect(CKDPub('secp256k1', parentKey, 0)).toMatchSnapshot();
        });
      });
    });

    it('should handle async mnemonic and seed operations', async () => {
      const password = 'password123';
      const entropy = Buffer.from('000102030405060708090a0b0c0d0e0f', 'hex');
      
      // Create encrypted revealable seed from mnemonic
      const testMnemonic = 'test test test test test test test test test test test junk';
      const rs = mnemonicToRevealableSeed(testMnemonic, 'optional passphrase');
      const hdCredential = encryptRevealableSeed({
        rs,
        password,
      });
      
      // Test mnemonicFromEntropyAsync
      const mnemonic = await mnemonicFromEntropyAsync({
        hdCredential,
        password,
      });
      expect(typeof mnemonic).toBe('string');
      expect(mnemonic.split(' ').length).toBe(12); // 12 words for 128-bit entropy
      
      // Test mnemonicToSeedAsync
      const seedBuffer = await mnemonicToSeedAsync({
        mnemonic,
        passphrase: 'optional passphrase',
      });
      expect(seedBuffer).toBeInstanceOf(Buffer);
      expect(seedBuffer.length).toBe(64); // 512 bits
      
      // Test generateRootFingerprintHexAsync
      const fingerprint = await generateRootFingerprintHexAsync({
        curveName: 'secp256k1',
        hdCredential,
        password,
      });
      expect(typeof fingerprint).toBe('string');
      expect(fingerprint).toMatch(/^[0-9a-f]{8}$/); // 4 bytes hex
      
      // Test with native platform
      platformEnv.isNative = true;
      const nativeMnemonic = await mnemonicFromEntropyAsync({
        hdCredential,
        password,
      });
      expect(nativeMnemonic).toBe(mnemonic);
      
      const nativeSeed = await mnemonicToSeedAsync({
        mnemonic: nativeMnemonic,
        passphrase: 'optional passphrase',
      });
      expect(nativeSeed).toEqual(seedBuffer);
      
      const nativeFingerprint = await generateRootFingerprintHexAsync({
        curveName: 'secp256k1',
        hdCredential,
        password,
      });
      expect(nativeFingerprint).toBe(fingerprint);
      
      // Test error cases
      await expect(mnemonicFromEntropyAsync({
        hdCredential: 'invalid',
        password: 'wrong',
      })).rejects.toThrow();
      
      await expect(mnemonicToSeedAsync({
        mnemonic: 'invalid mnemonic',
      })).rejects.toThrow();
      
      await expect(generateRootFingerprintHexAsync({
        curveName: 'secp256k1' as ICurveName,
        hdCredential: 'invalid',
        password: 'wrong',
      })).rejects.toThrow();
      
      // Reset platform
      platformEnv.isNative = false;
    });

    it('should throw error for invalid curve', () => {
      const encryptedParent = {
        key: encrypt(testPassword, masterKey.key),
        chainCode: masterKey.chainCode
      };
      
      expect(() => {
        CKDPriv('invalid-curve' as any, encryptedParent, 0, testPassword);
      }).toThrow('Curve invalid-curve is not supported');
    });
  });
  describe('batchGetPrivateKeys', () => {
    const testPassword = 'password123';
    const testSeed: IBip39RevealableSeed = {
      entropyWithLangPrefixed: '00112233445566778899aabbccddeeff',
      seed: '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff',
    };
    
    const encryptedSeed = encryptRevealableSeed({
      rs: testSeed,
      password: testPassword,
    });

    it('should derive private keys for valid paths', () => {
      const curveName: ICurveName = 'secp256k1';
      const prefix = 'm';
      const relPaths = ['0/0', '0/1', "44'/0'/0'/0/0"];

      const privateKeys = batchGetPrivateKeys(
        curveName,
        encryptedSeed,
        testPassword,
        prefix,
        relPaths,
      );

      expect(privateKeys).toHaveLength(3);
      privateKeys.forEach((key, index) => {
        expect(key).toHaveProperty('path');
        expect(key).toHaveProperty('parentFingerPrint');
        expect(key).toHaveProperty('extendedKey');
        expect(key.extendedKey).toHaveProperty('key');
        expect(key.extendedKey).toHaveProperty('chainCode');
        expect(Buffer.isBuffer(key.parentFingerPrint)).toBe(true);
        expect(Buffer.isBuffer(key.extendedKey.key)).toBe(true);
        expect(Buffer.isBuffer(key.extendedKey.chainCode)).toBe(true);
      });
    });

    it('should throw error for invalid curve name', () => {
      const curveName = 'invalid-curve' as ICurveName;
      const prefix = 'm';
      const relPaths = ['0/0'];

      expect(() =>
        batchGetPrivateKeys(
          curveName,
          encryptedSeed,
          testPassword,
          prefix,
          relPaths,
        ),
      ).toThrow('Curve invalid-curve is not supported');
    });

    it('should throw error for invalid password', () => {
      const curveName: ICurveName = 'secp256k1';
      const prefix = 'm';
      const relPaths = ['0/0'];

      expect(() =>
        batchGetPrivateKeys(
          curveName,
          encryptedSeed,
          'wrong-password',
          prefix,
          relPaths,
        ),
      ).toThrow();
    });

    it('should handle hardened and non-hardened derivation paths', () => {
      const curveName: ICurveName = 'secp256k1';
      const prefix = 'm';
      const relPaths = ["44'/0'", '0/0', "1'/0/0"];

      const privateKeys = batchGetPrivateKeys(
        curveName,
        encryptedSeed,
        testPassword,
        prefix,
        relPaths,
      );

      expect(privateKeys).toHaveLength(3);
      expect(privateKeys[0].path).toBe("m/44'/0'");
      expect(privateKeys[1].path).toBe('m/0/0');
      expect(privateKeys[2].path).toBe("m/1'/0/0");
    });
  });

  describe('batchGetPublicKeys', () => {
    const testPassword = 'password123';
    const testSeed: IBip39RevealableSeed = {
      entropyWithLangPrefixed: '00112233445566778899aabbccddeeff',
      seed: '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff',
    };
    
    const encryptedSeed = encryptRevealableSeed({
      rs: testSeed,
      password: testPassword,
    });

    it('should generate public keys matching private keys', () => {
      const curveName: ICurveName = 'secp256k1';
      const prefix = 'm';
      const relPaths = ['0/0', '0/1', "44'/0'/0'/0/0"];

      const privateKeys = batchGetPrivateKeys(
        curveName,
        encryptedSeed,
        testPassword,
        prefix,
        relPaths,
      );

      const publicKeys = batchGetPublicKeys(
        curveName,
        encryptedSeed,
        testPassword,
        prefix,
        relPaths,
      );

      expect(publicKeys).toHaveLength(privateKeys.length);
      publicKeys.forEach((pubKey, index) => {
        expect(pubKey.path).toBe(privateKeys[index].path);
        expect(pubKey.parentFingerPrint).toEqual(privateKeys[index].parentFingerPrint);
        expect(Buffer.isBuffer(pubKey.extendedKey.key)).toBe(true);
        expect(Buffer.isBuffer(pubKey.extendedKey.chainCode)).toBe(true);
        // Public key should be different from private key
        expect(pubKey.extendedKey.key).not.toEqual(privateKeys[index].extendedKey.key);
      });
    });

    it('should throw error for invalid curve name', () => {
      const curveName = 'invalid-curve' as ICurveName;
      const prefix = 'm';
      const relPaths = ['0/0'];

      expect(() =>
        batchGetPublicKeys(
          curveName,
          encryptedSeed,
          testPassword,
          prefix,
          relPaths,
        ),
      ).toThrow('Curve invalid-curve is not supported');
    });

    it('should throw error for invalid password', () => {
      const curveName: ICurveName = 'secp256k1';
      const prefix = 'm';
      const relPaths = ['0/0'];

      expect(() =>
        batchGetPublicKeys(
          curveName,
          encryptedSeed,
          'wrong-password',
          prefix,
          relPaths,
        ),
      ).toThrow();
    });

    it('should handle hardened and non-hardened derivation paths', () => {
      const curveName: ICurveName = 'secp256k1';
      const prefix = 'm';
      const relPaths = ["44'/0'", '0/0', "1'/0/0"];

      const publicKeys = batchGetPublicKeys(
        curveName,
        encryptedSeed,
        testPassword,
        prefix,
        relPaths,
      );

      expect(publicKeys).toHaveLength(3);
      expect(publicKeys[0].path).toBe("m/44'/0'");
      expect(publicKeys[1].path).toBe('m/0/0');
      expect(publicKeys[2].path).toBe("m/1'/0/0");
    });
  });

  describe('batchGetPublicKeysAsync', () => {
    const testPassword = 'password123';
    const testSeed: IBip39RevealableSeed = {
      entropyWithLangPrefixed: '00112233445566778899aabbccddeeff',
      seed: '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff',
    };
    
    const encryptedSeed = encryptRevealableSeed({
      rs: testSeed,
      password: testPassword,
    });

    beforeEach(() => {
      // Reset platformEnv.isNative before each test
      (platformEnv as any).isNative = false;
    });

    it('should return same results as batchGetPublicKeys in non-native environment', async () => {
      const curveName: ICurveName = 'secp256k1';
      const prefix = 'm';
      const relPaths = ['0/0', '0/1', "44'/0'/0'/0/0"];

      const syncResult = batchGetPublicKeys(
        curveName,
        encryptedSeed,
        testPassword,
        prefix,
        relPaths,
      );

      const asyncResult = await batchGetPublicKeysAsync({
        curveName,
        hdCredential: encryptedSeed,
        password: testPassword,
        prefix,
        relPaths,
      });

      expect(asyncResult).toEqual(syncResult);
    });

    it('should handle native environment correctly', async () => {
      (platformEnv as any).isNative = true;
      const mockResult = [
        {
          path: 'm/0/0',
          parentFingerPrint: 'deadbeef',
          extendedKey: {
            key: 'aabbcc',
            chainCode: '112233',
          },
        },
      ];

      // Mock the webembedApiProxy
      (appGlobals as any).$webembedApiProxy = {
        secret: {
          batchGetPublicKeys: jest.fn().mockResolvedValue(mockResult),
        },
      };

      const result = await batchGetPublicKeysAsync({
        curveName: 'secp256k1',
        hdCredential: encryptedSeed,
        password: testPassword,
        prefix: 'm',
        relPaths: ['0/0'],
      });

      expect(result).toHaveLength(1);
      expect(result[0].path).toBe('m/0/0');
      expect(Buffer.isBuffer(result[0].parentFingerPrint)).toBe(true);
      expect(result[0].parentFingerPrint.toString('hex')).toBe('deadbeef');
      expect(Buffer.isBuffer(result[0].extendedKey.key)).toBe(true);
      expect(result[0].extendedKey.key.toString('hex')).toBe('aabbcc');
      expect(Buffer.isBuffer(result[0].extendedKey.chainCode)).toBe(true);
      expect(result[0].extendedKey.chainCode.toString('hex')).toBe('112233');
    });

    it('should handle errors in native environment', async () => {
      (platformEnv as any).isNative = true;
      
      // Mock the webembedApiProxy with error
      (appGlobals as any).$webembedApiProxy = {
        secret: {
          batchGetPublicKeys: jest.fn().mockRejectedValue(new Error('Native error')),
        },
      };

      await expect(
        batchGetPublicKeysAsync({
          curveName: 'secp256k1',
          hdCredential: encryptedSeed,
          password: testPassword,
          prefix: 'm',
          relPaths: ['0/0'],
        }),
      ).rejects.toThrow('Native error');
    });

    afterEach(() => {
      // Clean up mocks
      if ((appGlobals as any).$webembedApiProxy) {
        delete (appGlobals as any).$webembedApiProxy;
      }
    });
  });

  describe('compressPublicKey', () => {
    it('should compress public keys correctly', () => {
      // Test with uncompressed secp256k1 public key
      const uncompressedKey = Buffer.from('04a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7893aba425419bc27a3b6c7e693a24c696f794c2ed877a1593cbee53b037368d7', 'hex');
      const compressedKey = compressPublicKey('secp256k1', uncompressedKey);
      expect(compressedKey).toBeInstanceOf(Buffer);
      expect(compressedKey.length).toBe(33); // Compressed public key length

      // Test with already compressed key
      const alreadyCompressed = Buffer.from('02a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7', 'hex');
      const recompressed = compressPublicKey('secp256k1', alreadyCompressed);
      expect(recompressed).toEqual(alreadyCompressed);

      // Test with different curves
      const nistUncompressed = Buffer.from('04b5d465bc991d8f0f7fa68dafa4cce5e3c57e3d0d70b3c1b6f9e4e57aed0b1a87d2390d1ca0323c898db9f3e51c4a7ead23108dd9c41d4d99f4ce0a9307048d54', 'hex');
      const nistCompressed = compressPublicKey('nistp256', nistUncompressed);
      expect(nistCompressed.length).toBe(33);

      // Test error cases
      expect(() => compressPublicKey('invalid-curve' as any, uncompressedKey)).toThrow();
      expect(() => compressPublicKey('secp256k1', Buffer.from('invalid'))).toThrow();
    });

    it('should match snapshot for compressed public key', () => {
      const uncompressedKey = Buffer.from('04a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7893aba425419bc27a3b6c7e693a24c696f794c2ed877a1593cbee53b037368d7', 'hex');
      expect(compressPublicKey('secp256k1', uncompressedKey)).toMatchSnapshot();
    });
  });

  describe('decryptImportedCredential', () => {
    const testPassword = 'test123';
    const testCredential: ICoreImportedCredential = {
      privateKey: '0123456789abcdef',
    };

    it('should decrypt imported credential correctly', () => {
      // First encrypt the credential
      const encryptedCredential = encryptImportedCredential({
        credential: testCredential,
        password: testPassword,
      });

      // Then decrypt and verify
      const decryptedCredential = decryptImportedCredential({
        credential: encryptedCredential,
        password: testPassword,
      });

      expect(decryptedCredential).toEqual(testCredential);
    });

    it('should handle credential with prefix correctly', () => {
      const encryptedCredential = encryptImportedCredential({
        credential: testCredential,
        password: testPassword,
      });

      expect(encryptedCredential.startsWith('|PK|')).toBe(true);
      
      const decryptedCredential = decryptImportedCredential({
        credential: encryptedCredential,
        password: testPassword,
      });

      expect(decryptedCredential).toEqual(testCredential);
    });

    it('should throw error for invalid password', () => {
      const encryptedCredential = encryptImportedCredential({
        credential: testCredential,
        password: testPassword,
      });

      expect(() => decryptImportedCredential({
        credential: encryptedCredential,
        password: 'wrong-password',
      })).toThrow();
    });

    it('should throw error for invalid credential format', () => {
      expect(() => decryptImportedCredential({
        credential: '|PK|invalid-data',
        password: testPassword,
      })).toThrow();
    });

    it('should match snapshot for decrypted credential', () => {
      const encryptedCredential = encryptImportedCredential({
        credential: testCredential,
        password: testPassword,
      });

      expect(decryptImportedCredential({
        credential: encryptedCredential,
        password: testPassword,
      })).toMatchSnapshot();
    });
  });

  describe('decryptRevealableSeed', () => {
    const testPassword = 'test123';
    const testSeed: IBip39RevealableSeed = {
      entropyWithLangPrefixed: '00112233445566778899aabbccddeeff',
      seed: '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff',
    };

    it('should decrypt revealable seed correctly', () => {
      // First encrypt the seed
      const encryptedSeed = encryptRevealableSeed({
        rs: testSeed,
        password: testPassword,
      });

      // Then decrypt and verify
      const decryptedSeed = decryptRevealableSeed({
        rs: encryptedSeed,
        password: testPassword,
      });

      expect(decryptedSeed).toEqual(testSeed);
    });

    it('should throw error for invalid password', () => {
      const encryptedSeed = encryptRevealableSeed({
        rs: testSeed,
        password: testPassword,
      });

      expect(() => decryptRevealableSeed({
        rs: encryptedSeed,
        password: 'wrong-password',
      })).toThrow();
    });

    it('should throw error for invalid seed format', () => {
      expect(() => decryptRevealableSeed({
        rs: 'invalid-seed-data',
        password: testPassword,
      })).toThrow();
    });

    it('should match snapshot for decrypted seed', () => {
      const encryptedSeed = encryptRevealableSeed({
        rs: testSeed,
        password: testPassword,
      });

      expect(decryptRevealableSeed({
        rs: encryptedSeed,
        password: testPassword,
      })).toMatchSnapshot();
    });
  });

  describe('decryptVerifyString', () => {
    const testPassword = 'test123';

    it('should decrypt verify string correctly', () => {
      // First encrypt the string
      const encryptedString = encryptVerifyString({
        password: testPassword,
      });

      // Then decrypt and verify
      const decryptedString = decryptVerifyString({
        verifyString: encryptedString,
        password: testPassword,
      });

      expect(decryptedString).toBe(DEFAULT_VERIFY_STRING);
    });

    it('should handle string with prefix correctly', () => {
      const encryptedString = encryptVerifyString({
        password: testPassword,
        addPrefixString: true,
      });

      expect(encryptedString.startsWith('|VS|')).toBe(true);
      
      const decryptedString = decryptVerifyString({
        verifyString: encryptedString,
        password: testPassword,
      });

      expect(decryptedString).toBe(DEFAULT_VERIFY_STRING);
    });

    it('should throw error for invalid password', () => {
      const encryptedString = encryptVerifyString({
        password: testPassword,
      });

      expect(() => decryptVerifyString({
        verifyString: encryptedString,
        password: 'wrong-password',
      })).toThrow();
    });

    it('should throw error for invalid string format', () => {
      expect(() => decryptVerifyString({
        verifyString: '|VS|invalid-data',
        password: testPassword,
      })).toThrow();
    });

    it('should match snapshot for decrypted string', () => {
      const encryptedString = encryptVerifyString({
        password: testPassword,
      });

      expect(decryptVerifyString({
        verifyString: encryptedString,
        password: testPassword,
      })).toMatchSnapshot();
    });
  });

  describe('encryptImportedCredential', () => {
    const testPassword = 'test123';
    const testCredential: ICoreImportedCredential = {
      privateKey: '0123456789abcdef',
    };

    it('should encrypt credential correctly', () => {
      const encryptedCredential = encryptImportedCredential({
        credential: testCredential,
        password: testPassword,
      });

      expect(encryptedCredential.startsWith('|PK|')).toBe(true);

      // Verify we can decrypt it back
      const decryptedCredential = decryptImportedCredential({
        credential: encryptedCredential,
        password: testPassword,
      });

      expect(decryptedCredential).toEqual(testCredential);
    });

    it('should handle different private key formats', () => {
      const longKeyCredential: ICoreImportedCredential = {
        privateKey: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
      };

      const encryptedCredential = encryptImportedCredential({
        credential: longKeyCredential,
        password: testPassword,
      });

      const decryptedCredential = decryptImportedCredential({
        credential: encryptedCredential,
        password: testPassword,
      });

      expect(decryptedCredential).toEqual(longKeyCredential);
    });

    it('should throw error for empty private key', () => {
      const invalidCredential = {
        privateKey: '',
      };

      expect(() => encryptImportedCredential({
        credential: invalidCredential as ICoreImportedCredential,
        password: testPassword,
      })).toThrow();
    });

    it('should match snapshot', () => {
      const encryptedCredential = encryptImportedCredential({
        credential: testCredential,
        password: testPassword,
      });

      expect(encryptedCredential).toMatchSnapshot();
    });
  });

  describe('encryptRevealableSeed', () => {
    const testPassword = 'test123';
    const testSeed: IBip39RevealableSeed = {
      entropyWithLangPrefixed: '0123456789abcdef0123456789abcdef',
      seed: 'deadbeefdeadbeefdeadbeefdeadbeef',
    };

    it('should encrypt seed correctly', () => {
      const encryptedSeed = encryptRevealableSeed({
        rs: testSeed,
        password: testPassword,
      });

      // Verify we can decrypt it back
      const decryptedSeed = decryptRevealableSeed({
        rs: encryptedSeed,
        password: testPassword,
      });

      expect(decryptedSeed).toEqual(testSeed);
    });

    it('should handle different seed lengths', () => {
      const longSeed: IBip39RevealableSeed = {
        entropyWithLangPrefixed: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
        seed: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',
      };

      const encryptedSeed = encryptRevealableSeed({
        rs: longSeed,
        password: testPassword,
      });

      const decryptedSeed = decryptRevealableSeed({
        rs: encryptedSeed,
        password: testPassword,
      });

      expect(decryptedSeed).toEqual(longSeed);
    });

    it('should throw error for invalid seed object', () => {
      const invalidSeed = {
        entropyWithLangPrefixed: '',
        seed: '',
      };

      expect(() => encryptRevealableSeed({
        rs: invalidSeed as IBip39RevealableSeed,
        password: testPassword,
      })).toThrow();
    });

    it('should match snapshot', () => {
      const encryptedSeed = encryptRevealableSeed({
        rs: testSeed,
        password: testPassword,
      });

      expect(encryptedSeed).toMatchSnapshot();
    });
  });

  describe('encryptVerifyString', () => {
    const testPassword = 'test123';

    it('should encrypt string correctly', () => {
      const encryptedString = encryptVerifyString({
        password: testPassword,
      });

      // Verify we can decrypt it back
      const decryptedString = decryptVerifyString({
        verifyString: encryptedString,
        password: testPassword,
      });

      expect(decryptedString).toBe('OneKey');
    });

    it('should handle prefix option', () => {
      const withPrefix = encryptVerifyString({
        password: testPassword,
        addPrefixString: true,
      });

      expect(withPrefix.startsWith('|VS|')).toBe(true);

      const withoutPrefix = encryptVerifyString({
        password: testPassword,
        addPrefixString: false,
      });

      expect(withoutPrefix.startsWith('|VS|')).toBe(false);

      // Both should decrypt correctly
      expect(decryptVerifyString({
        verifyString: withPrefix,
        password: testPassword,
      })).toBe('OneKey');

      expect(decryptVerifyString({
        verifyString: withoutPrefix,
        password: testPassword,
      })).toBe('OneKey');
    });

    it('should throw error for empty password', () => {
      expect(() => encryptVerifyString({
        password: '',
      })).toThrow();
    });

    it('should match snapshot', () => {
      const encryptedString = encryptVerifyString({
        password: testPassword,
      });

      expect(encryptedString).toMatchSnapshot();
    });
  });

  describe('fixV4VerifyStringToV5', () => {
    const defaultVerifyString = 'OneKey';

    it('should not modify DEFAULT_VERIFY_STRING', () => {
      const result = fixV4VerifyStringToV5({
        verifyString: defaultVerifyString,
      });
      expect(result).toBe(defaultVerifyString);
    });

    it('should add prefix if missing', () => {
      const testString = 'abc123';
      const result = fixV4VerifyStringToV5({
        verifyString: testString,
      });
      expect(result).toBe('|VS|abc123');
    });

    it('should not duplicate prefix if already present', () => {
      const testString = '|VS|abc123';
      const result = fixV4VerifyStringToV5({
        verifyString: testString,
      });
      expect(result).toBe('|VS|abc123');
    });

    it('should match snapshot', () => {
      const result = fixV4VerifyStringToV5({
        verifyString: 'test123',
      });
      expect(result).toMatchSnapshot();
    });
  });

  describe('generateMasterKeyFromSeed', () => {
    const testSeed = Buffer.from('000102030405060708090a0b0c0d0e0f', 'hex');
    const testPassword = 'password';
    const testRevealableSeed = {
      entropyWithLangPrefixed: testSeed.toString('hex'),
      seed: testSeed.toString('hex'),
      entropy: testSeed.toString('hex'),
    };
    const encryptedSeed = encryptRevealableSeed({
      rs: testRevealableSeed,
      password: testPassword,
    });

    it('should generate master key for secp256k1', () => {
      const masterKey = generateMasterKeyFromSeed('secp256k1', encryptedSeed, testPassword);
      expect(masterKey.key).toBeInstanceOf(Buffer);
      expect(masterKey.chainCode).toBeInstanceOf(Buffer);
      expect(masterKey.key.length).toBe(32);
      expect(masterKey.chainCode.length).toBe(32);
    });

    it('should generate master key for nistp256', () => {
      const masterKey = generateMasterKeyFromSeed('nistp256', encryptedSeed, testPassword);
      expect(masterKey.key).toBeInstanceOf(Buffer);
      expect(masterKey.chainCode).toBeInstanceOf(Buffer);
      expect(masterKey.key.length).toBe(32);
      expect(masterKey.chainCode.length).toBe(32);
    });

    it('should generate master key for ed25519', () => {
      const masterKey = generateMasterKeyFromSeed('ed25519', encryptedSeed, testPassword);
      expect(masterKey.key).toBeInstanceOf(Buffer);
      expect(masterKey.chainCode).toBeInstanceOf(Buffer);
      expect(masterKey.key.length).toBe(32);
      expect(masterKey.chainCode.length).toBe(32);
    });

    it('should throw error for invalid curve', () => {
      expect(() => {
        generateMasterKeyFromSeed('invalid-curve' as any, encryptedSeed, testPassword);
      }).toThrow('Key derivation is not supported for curve invalid-curve');
    });

    it('should throw error for invalid password', () => {
      expect(() => {
        generateMasterKeyFromSeed('secp256k1', encryptedSeed, 'wrong-password');
      }).toThrow('IncorrectPassword');
    });

    it('should match snapshot', () => {
      const masterKey = generateMasterKeyFromSeed('secp256k1', encryptedSeed, testPassword);
      expect(masterKey).toMatchSnapshot();
    });
  });

  describe('mnemonicFromEntropyAsync', () => {
    const testPassword = 'test123';
    const testEntropy = Buffer.from('000102030405060708090a0b0c0d0e0f', 'hex');
    const testRevealableSeed = {
      entropyWithLangPrefixed: testEntropy.toString('hex'),
      seed: testEntropy.toString('hex'),
      entropy: testEntropy.toString('hex'),
    };
    const encryptedSeed = encryptRevealableSeed({
      rs: testRevealableSeed,
      password: testPassword,
    });


    it('should generate mnemonic from entropy', async () => {
      const mnemonic = await mnemonicFromEntropyAsync({
        hdCredential: encryptedSeed,
        password: testPassword,
      });
      expect(typeof mnemonic).toBe('string');
      expect(mnemonic.split(' ').length).toBe(12); // 12 words for 128-bit entropy
    });

    it('should throw error for invalid password', async () => {
      await expect(mnemonicFromEntropyAsync({
        hdCredential: encryptedSeed,
        password: 'wrong-password',
      })).rejects.toThrow();
    });

    it('should match snapshot', async () => {
      const mnemonic = await mnemonicFromEntropyAsync({
        hdCredential: encryptedSeed,
        password: testPassword,
      });
      expect(mnemonic).toMatchSnapshot();
    });
  });

  describe('N', () => {
    const testPassword = 'test123';
    const masterKey: IBip32ExtendedKey = {
      key: encrypt(testPassword, Buffer.from('0123456789abcdef0123456789abcdef', 'hex')),
      chainCode: Buffer.from('0123456789abcdef0123456789abcdef', 'hex'),
    };

    it('should derive public key from private key', () => {
      const publicKey = N('secp256k1', masterKey);
      expect(publicKey).toBeDefined();
      expect(publicKey.key).toBeInstanceOf(Buffer);
      expect(publicKey.chainCode).toEqual(masterKey.chainCode);
    });

    it('should work with different curves', () => {
      const curves: ICurveName[] = ['secp256k1', 'nistp256', 'ed25519'];
      curves.forEach(curve => {
        const publicKey = N(curve, masterKey);
        expect(publicKey).toBeDefined();
        expect(publicKey.key).toBeInstanceOf(Buffer);
        expect(publicKey.chainCode).toEqual(masterKey.chainCode);
      });
    });

    it('should throw error for invalid curve', () => {
      expect(() => N('invalid-curve' as ICurveName, masterKey)).toThrow();
    });

    it('should match snapshot', () => {
      const publicKey = N('secp256k1', masterKey);
      expect(publicKey).toMatchSnapshot();
    });
  });
});
