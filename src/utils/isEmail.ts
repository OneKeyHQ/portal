// Email address matcher.
const matcher =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * Loosely validate an email address.
 *
 * @param {string} string
 * @return {boolean}
 */
export function isEmail(string: string) {
  if (string.length > 320) return false;
  return matcher.test(string);
}
