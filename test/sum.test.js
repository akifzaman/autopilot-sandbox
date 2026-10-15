import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from '../src/index.js';

test('sum of empty array is 0', () => {
  assert.equal(sum([]), 0);
});

test('sum of numbers array', () => {
  assert.equal(sum([1, 2, 3, 4]), 10);
});

test('sum rejects non-array input', () => {
  assert.throws(() => sum(42), TypeError);
});

test('sum rejects array with non-number', () => {
  assert.throws(() => sum([1, '2', 3]), TypeError);
});
