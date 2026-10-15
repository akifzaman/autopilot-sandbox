/**
 * Clamp a number between min and max inclusive.
 * @param {number} n - The number to clamp.
 * @param {number} min - Minimum allowed value.
 * @param {number} max - Maximum allowed value.
 * @returns {number} - The clamped number.
 */
export function clamp(n, min, max) {
  if (typeof n !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('clamp expects numbers');
  }
  if (min > max) {
    throw new RangeError('min cannot be greater than max');
  }
  if (n < min) return min;
  if (n > max) return max;
  return n;
}
