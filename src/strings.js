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
/**
 * Convert a string into a URL-friendly slug.
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  if (typeof text !== 'string') {
    throw new TypeError('slugify expects a string');
  }
  let s = text.trim().toLowerCase();
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  s = s.replace(/[^a-z0-9]+/g, '-');
  s = s.replace(/^[-]+|[-]+$/g, '');
  return s;
}
/**
 * Truncate a string to a maximum length, adding an ellipsis if truncated.
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(text, maxLength) {
  if (typeof text !== 'string') {
    throw new TypeError('truncate expects a string');
  }
  if (!Number.isInteger(maxLength) || maxLength < 1) {
    throw new RangeError('truncate expects maxLength as integer >= 1');
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - 1) + '…';
}
