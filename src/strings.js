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
 * Convert a string to a URL-friendly slug.
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  if (typeof text !== 'string') {
    throw new TypeError('slugify expects a string');
  }
  // Normalize and strip diacritics
  const normalized = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const lower = normalized.toLowerCase();
  // Replace non-alphanumeric runs with hyphen and trim
  const replaced = lower.replace(/[^a-z0-9]+/g, '-');
  const trimmed = replaced.replace(/^[-]+|[-]+$/g, '');
  return trimmed;
}
