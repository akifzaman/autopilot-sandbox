import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/index.js';

test('clamp returns n when within range', () => {
  assert.equal(clamp(5, 1, 10), 5);
});

test('clamp returns min when n < min', () => {
  assert.equal(clamp(-2, 0, 8), 0);
});

test('clamp returns max when n > max', () => {
  assert.equal(clamp(100, 0, 50), 50);
});

test('clamp throws TypeError for non-number arguments', () => {
  assert.throws(() => clamp('a', 0, 1), TypeError);
  assert.throws(() => clamp(1, 'b', 2), TypeError);
  assert.throws(() => clamp(1, 0, 'c'), TypeError);
});

test('clamp throws RangeError when min > max', () => {
  assert.throws(() => clamp(5, 10, 2), RangeError);
});
