/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Buffer } from 'buffer';

import {
  decrypt,
  decryptAsync,
  decryptString,
  decodeSensitiveText,
  decodePassword,
  encrypt,
  encryptAsync,
  encryptString,
  encodeSensitiveText,
  encodePassword,
  getBgSensitiveTextEncodeKey,
  setBgSensitiveTextEncodeKey,
} from '../encryptors/aes256';

/*
yarn jest packages/core/src/secret/__tests__/secret-aes256.test.ts
*/

// Mock crypto for deterministic encryption outputs
jest.mock('crypto', () => ({
  ...jest.requireActual('crypto'),
  randomBytes: jest.fn().mockImplementation((size: number) => {
    // Return specific bytes for deterministic encryption outputs
    if (size === 32) {
      return Buffer.from(
        '94b51c8f77aa44bdf1a6071872cd89aae44fba848cf8a50c28280a9b79a56b24',
        'hex',
      );
    }
    if (size === 16) {
      return Buffer.from('d3ebac3b568ef4e5369441a40eee4a24', 'hex');
    }
    if (size === 4) {
      return Buffer.from('0efcb8ef', 'hex');
    }
    return Buffer.alloc(size, 0xde);
  }),
}));

describe('AES256 Encryption Tests', () => {
  const TEST_PASSWORD = 'password123';
  const TEST_DATA = 'Hello AES256';
  const TEST_BUFFER = Buffer.from(TEST_DATA);

  describe('encrypt/decrypt (sync)', () => {
    it('should encrypt and decrypt string data with snapshot', () => {
      const encrypted = encrypt(TEST_PASSWORD, TEST_DATA);
      expect(encrypted.toString('hex')).toMatchSnapshot('encrypt-string-data');

      const decrypted = decrypt(TEST_PASSWORD, encrypted);
      expect(decrypted.toString()).toBe(TEST_DATA);
    });

    it('should encrypt and decrypt buffer data with snapshot', () => {
      const encrypted = encrypt(TEST_PASSWORD, TEST_BUFFER);
      expect(encrypted.toString('hex')).toMatchSnapshot('encrypt-buffer-data');

      const decrypted = decrypt(TEST_PASSWORD, encrypted);
      expect(decrypted.toString()).toBe(TEST_DATA);
    });

    it('should throw on incorrect password', () => {
      const encrypted = encrypt(TEST_PASSWORD, TEST_DATA);
      expect(() => decrypt('wrong-password', encrypted)).toThrow();
    });

    it('should throw on empty password', () => {
      expect(() => encrypt('', TEST_DATA)).toThrow();
      const encrypted = encrypt(TEST_PASSWORD, TEST_DATA);
      expect(() => decrypt('', encrypted)).toThrow();
    });
  });

  describe('encryptAsync/decryptAsync', () => {
    it('should async encrypt/decrypt string data with snapshot', async () => {
      const encrypted = await encryptAsync({
        password: TEST_PASSWORD,
        data: TEST_DATA,
      });
      expect(encrypted.toString('hex')).toMatchSnapshot('encryptAsync-string-data');

      const decrypted = await decryptAsync({
        password: TEST_PASSWORD,
        data: encrypted,
      });
      expect(decrypted.toString()).toBe(TEST_DATA);
    });

    it('should async encrypt/decrypt buffer data with snapshot', async () => {
      const encrypted = await encryptAsync({
        password: TEST_PASSWORD,
        data: TEST_BUFFER,
      });
      expect(encrypted.toString('hex')).toMatchSnapshot('encryptAsync-buffer-data');

      const decrypted = await decryptAsync({
        password: TEST_PASSWORD,
        data: encrypted,
      });
      expect(decrypted.toString()).toBe(TEST_DATA);
    });

    it('should throw on incorrect password', async () => {
      const encrypted = await encryptAsync({
        password: TEST_PASSWORD,
        data: TEST_DATA,
      });
      await expect(
        decryptAsync({
          password: 'wrong-password',
          data: encrypted,
        }),
      ).rejects.toThrow();
    });

    it('should throw on empty password', async () => {
      await expect(
        encryptAsync({
          password: '',
          data: TEST_DATA,
        }),
      ).rejects.toThrow();

      const encrypted = await encryptAsync({
        password: TEST_PASSWORD,
        data: TEST_DATA,
      });
      await expect(
        decryptAsync({
          password: '',
          data: encrypted,
        }),
      ).rejects.toThrow();
    });
  });

  describe('encryptString/decryptString', () => {
    it('should encrypt and decrypt string with hex encoding and snapshot', () => {
      const encrypted = encryptString({
        password: TEST_PASSWORD,
        data: TEST_DATA,
      });
      expect(encrypted).toMatchSnapshot('encryptString-hex');

      const decrypted = decryptString({
        password: TEST_PASSWORD,
        data: encrypted,
      });
      expect(decrypted).toBe(TEST_DATA);
    });

    it('should support different encodings with snapshot', () => {
      const encrypted = encryptString({
        password: TEST_PASSWORD,
        data: TEST_DATA,
        dataEncoding: 'base64',
      });
      expect(encrypted).toMatchSnapshot('encryptString-base64');

      const decrypted = decryptString({
        password: TEST_PASSWORD,
        data: encrypted,
        dataEncoding: 'base64',
      });
      expect(decrypted).toBe(TEST_DATA);
    });

    it('should throw on incorrect password', () => {
      const encrypted = encryptString({
        password: TEST_PASSWORD,
        data: TEST_DATA,
      });
      expect(() =>
        decryptString({
          password: 'wrong-password',
          data: encrypted,
        }),
      ).toThrow();
    });
  });

  describe('encodePassword/decodePassword', () => {
    it('should encode and decode password with snapshot', () => {
      const encoded = encodePassword({
        password: TEST_PASSWORD,
        key: 'test-key',
      });
      expect(encoded).toMatchSnapshot('encodePassword');

      const decoded = decodePassword({
        password: encoded,
        key: 'test-key',
      });
      expect(decoded).toBe(TEST_PASSWORD);
    });

    it('should throw on incorrect key', () => {
      const encoded = encodePassword({
        password: TEST_PASSWORD,
        key: 'test-key',
      });
      expect(() =>
        decodePassword({
          password: encoded,
          key: 'wrong-key',
        }),
      ).toThrow();
    });

    it('should throw on empty key', () => {
      expect(() =>
        encodePassword({
          password: TEST_PASSWORD,
          key: '',
        }),
      ).toThrow();

      const encoded = encodePassword({
        password: TEST_PASSWORD,
        key: 'test-key',
      });
      expect(() =>
        decodePassword({
          password: encoded,
          key: '',
        }),
      ).toThrow();
    });
  });

  describe('encodeSensitiveText/decodeSensitiveText', () => {
    it('should encode and decode sensitive text with snapshot', () => {
      const encoded = encodeSensitiveText({
        text: TEST_DATA,
        key: 'test-key',
      });
      expect(encoded).toMatchSnapshot('encodeSensitiveText');

      const decoded = decodeSensitiveText({
        encodedText: encoded,
        key: 'test-key',
      });
      expect(decoded).toBe(TEST_DATA);
    });

    it('should throw on incorrect key', () => {
      const encoded = encodeSensitiveText({
        text: TEST_DATA,
        key: 'test-key',
      });
      expect(() =>
        decodeSensitiveText({
          encodedText: encoded,
          key: 'wrong-key',
        }),
      ).toThrow();
    });

    it('should throw on empty key', () => {
      expect(() =>
        encodeSensitiveText({
          text: TEST_DATA,
          key: '',
        }),
      ).toThrow();

      const encoded = encodeSensitiveText({
        text: TEST_DATA,
        key: 'test-key',
      });
      expect(() =>
        decodeSensitiveText({
          encodedText: encoded,
          key: '',
        }),
      ).toThrow();
    });

    it('should throw on invalid encoded text', () => {
      expect(() =>
        decodeSensitiveText({
          encodedText: 'invalid-encoded-text',
          key: 'test-key',
        }),
      ).toThrow('Not encoded sensitive text');
    });
  });

  describe('Background Key Management', () => {
    it('should throw when getting key from extension UI', () => {
      // Mock extension UI environment
      const originalPlatformEnv = global.platformEnv;
      global.platformEnv = {
        ...originalPlatformEnv,
        isExtensionUi: true,
      };

      expect(() => getBgSensitiveTextEncodeKey()).toThrow(
        'Not allow to call ()getBgSensitiveTextEncodeKey from extension ui',
      );

      // Restore original environment
      global.platformEnv = originalPlatformEnv;
    });

    it('should throw when setting key from extension UI', () => {
      // Mock extension UI environment
      const originalPlatformEnv = global.platformEnv;
      global.platformEnv = {
        ...originalPlatformEnv,
        isExtensionUi: true,
      };

      expect(() => setBgSensitiveTextEncodeKey('test-key')).toThrow(
        'Not allow to call setBgSensitiveTextEncodeKey() from extension ui',
      );

      // Restore original environment
      global.platformEnv = originalPlatformEnv;
    });

    it('should throw when setting key from non-webembed', () => {
      // Mock non-webembed environment
      const originalPlatformEnv = global.platformEnv;
      global.platformEnv = {
        ...originalPlatformEnv,
        isExtensionUi: false,
        isWebEmbed: false,
      };

      expect(() => setBgSensitiveTextEncodeKey('test-key')).toThrow(
        'Only allow to call setBgSensitiveTextEncodeKey() from webembed',
      );

      // Restore original environment
      global.platformEnv = originalPlatformEnv;
    });

    it('should set and get key in webembed environment', () => {
      // Mock webembed environment
      const originalPlatformEnv = global.platformEnv;
      global.platformEnv = {
        ...originalPlatformEnv,
        isExtensionUi: false,
        isWebEmbed: true,
      };

      const testKey = 'test-key-123';
      setBgSensitiveTextEncodeKey(testKey);
      expect(getBgSensitiveTextEncodeKey()).toBe(testKey);

      // Restore original environment
      global.platformEnv = originalPlatformEnv;
    });
  });
});
