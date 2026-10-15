import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capitalize } from '../src/index.js';

test('capitalize uppercases the first character', () => {
  assert.equal(capitalize('hello world'), 'Hello world');
});

test('capitalize leaves an empty string unchanged', () => {
  assert.equal(capitalize(''), '');
});

test('capitalize rejects non-strings', () => {
  assert.throws(() => capitalize(42), TypeError);
});
import { truncate } from '../src/index.js';

test('truncate returns unchanged when length <= maxLength', () => {
  assert.equal(truncate('hello', 10), 'hello');
});

test('truncate truncates and adds ellipsis', () => {
  assert.equal(truncate('hello world', 6), 'hello…');
});

test('truncate respects maxLength 1', () => {
  assert.equal(truncate('abc', 1), '…');
});

test('truncate throws TypeError for non-string', () => {
  assert.throws(() => truncate(42, 5), TypeError);
});

test('truncate throws RangeError for invalid maxLength', () => {
  assert.throws(() => truncate('test', 0), RangeError);
  assert.throws(() => truncate('test', -1), RangeError);
  assert.throws(() => truncate('test', 2.5), RangeError);
  assert.throws(() => truncate('test', '5'), RangeError);
});
