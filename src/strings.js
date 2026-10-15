/**
 * Uppercase the first character of a string, leave the rest unchanged.
 * @param {string} text
 * @returns {string}
 */
export function capitalize(text) {
  if (typeof text !== 'string') {
    throw new TypeError('capitalize expects a string');
  }
  if (text.length === 0) {
    return text;
  }
  return text[0].toUpperCase() + text.slice(1);
}
