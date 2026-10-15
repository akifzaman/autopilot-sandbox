/**
 * Count the number of words in a string.
 * Words are sequences of non-whitespace characters separated by whitespace.
 * @param {string} str - Input string.
 * @returns {number} - Word count (0 for empty or whitespace-only strings).
 */
export function countWords(str) {
  if (typeof str !== 'string') {
    throw new TypeError('countWords expects a string');
  }
  const trimmed = str.trim();
  if (trimmed === '') {
    return 0;
  }
  return trimmed.split(/\s+/).length;
}
