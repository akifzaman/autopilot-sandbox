import { test } from 'node:test';
import assert from 'node:assert/strict';
import { truncate } from '../src/index.js';

test('truncate returns original when length <= maxLength', () => {
  assert.equal(truncate('hello', 10), 'hello');
});

test('truncate shortens and adds ellipsis', () => {
  assert.equal(truncate('hello world', 6), 'hello…');
});

test('truncate length never exceeds maxLength', () => {
  const result = truncate('abcdefghijklmnopqrstuvwxyz', 5);
  assert.equal(result.length, 5);
});

test('invalid text throws TypeError', () => {
  assert.throws(() => truncate(123, 5), TypeError);
});

test('invalid maxLength throws RangeError', () => {
  assert.throws(() => truncate('hi', 0), RangeError);
  assert.throws(() => truncate('hi', -1), RangeError);
  assert.throws(() => truncate('hi', 2.5), RangeError);
  assert.throws(() => truncate('hi', '5'), RangeError);
});
