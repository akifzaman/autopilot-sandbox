import { test } from 'node:test';
import assert from 'node:assert/strict';
import { max } from '../src/index.js';

test('max returns the largest number', () => {
  assert.equal(max([1, 5, 3, 9, 2]), 9);
});

test('max with negative numbers', () => {
  assert.equal(max([-10, -5, -20]), -5);
});

test('max with empty array returns -Infinity', () => {
  assert.equal(max([]), -Infinity);
});

test('max throws TypeError for non-array', () => {
  assert.throws(() => max(42), TypeError);
});

test('max throws TypeError for non-number elements', () => {
  assert.throws(() => max([1, '2', 3]), TypeError);
});
