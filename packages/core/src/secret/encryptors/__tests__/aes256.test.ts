import { decrypt, decryptString } from '../aes256';
import {
  encrypt,
  encryptAsync,
  encryptString,
  encryptStringAsync,
} from '../aes256';

describe('aes256', () => {
  const testPassword = 'testPassword123';
  const testData = 'Hello, World!';
  const testBuffer = Buffer.from(testData);

  describe('encrypt/decrypt', () => {
    it('should encrypt and decrypt data correctly using sync methods', () => {
      const encrypted = encrypt(testPassword, testBuffer);
      const decrypted = decrypt(testPassword, encrypted);
      expect(decrypted.toString()).toBe(testData);
    });

    it('should encrypt and decrypt data correctly using async methods', async () => {
      const encrypted = await encryptAsync({ password: testPassword, data: testBuffer });
      const decrypted = decrypt(testPassword, encrypted);
      expect(decrypted.toString()).toBe(testData);
    });

    it('should produce different ciphertexts for same input', async () => {
      const encrypted1 = await encryptAsync({ password: testPassword, data: testBuffer });
      const encrypted2 = await encryptAsync({ password: testPassword, data: testBuffer });
      expect(encrypted1.toString('hex')).not.toBe(encrypted2.toString('hex'));
    });
  });

  describe('encryptString/decryptString', () => {
    it('should encrypt and decrypt strings correctly using sync methods', () => {
      const encrypted = encryptString({
        password: testPassword,
        data: testData,
        dataEncoding: 'utf8',
      });
      const decrypted = decryptString({
        password: testPassword,
        data: encrypted,
      });
      expect(decrypted).toBe(testData);
    });

    it('should encrypt and decrypt strings correctly using async methods', async () => {
      const encrypted = await encryptStringAsync({
        password: testPassword,
        data: testData,
        dataEncoding: 'utf8',
      });
      const decrypted = decryptString({
        password: testPassword,
        data: encrypted,
      });
      expect(decrypted).toBe(testData);
    });

    it('should handle different encodings correctly', async () => {
      const hexData = Buffer.from(testData).toString('hex');
      const encrypted = await encryptStringAsync({
        password: testPassword,
        data: hexData,
        dataEncoding: 'hex',
      });
      const decrypted = decryptString({
        password: testPassword,
        data: encrypted,
      });
      expect(Buffer.from(decrypted, 'hex').toString()).toBe(testData);
    });
  });

  describe('deprecation warnings', () => {
    const originalWarn = console.warn;
    let warnMock: jest.Mock;

    beforeEach(() => {
      warnMock = jest.fn();
      console.warn = warnMock;
    });

    afterEach(() => {
      console.warn = originalWarn;
    });

    it('should show deprecation warning for sync encrypt', () => {
      encrypt(testPassword, testBuffer);
      expect(warnMock).toHaveBeenCalledWith(
        expect.stringContaining('deprecated'),
      );
    });

    it('should show deprecation warning for sync encryptString', () => {
      encryptString({
        password: testPassword,
        data: testData,
      });
      expect(warnMock).toHaveBeenCalledWith(
        expect.stringContaining('deprecated'),
      );
    });
  });
});
