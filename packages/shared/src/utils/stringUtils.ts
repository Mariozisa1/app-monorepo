import safeStringify from 'fast-safe-stringify';
import { isString } from 'lodash';
import validator from 'validator';

import { generateUUID } from './miscUtils';

export function equalsIgnoreCase(
  a: string | undefined | null,
  b: string | undefined | null,
): boolean {
  return a?.toUpperCase() === b?.toUpperCase();
}

export function stableStringify(
  value: any,
  replacer?: (key: string, value: any) => any,
  space?: string | number,
  options?: { depthLimit: number | undefined; edgesLimit: number | undefined },
): string {
  return safeStringify.stableStringify(value, replacer, space, options);
}

function randomString(
  length: number,
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
) {
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

// capitalizeWords("hello world") => "Hello World"
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

function isValidEmail(email: string): boolean {
  if (!email || !isString(email)) {
    return false;
  }
  return validator.isEmail(email);
}

export default {
  generateUUID,
  validator,
  isValidEmail,
  stableStringify,
  safeStringify,
  randomString,
  equalsIgnoreCase,
  capitalizeWords,
};
