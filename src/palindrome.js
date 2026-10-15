/**
 * Check if a string is a palindrome, ignoring case and non‑alphanumeric characters.
 * @param {string} str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new TypeError('isPalindrome expects a string');
  }
  const cleaned = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
