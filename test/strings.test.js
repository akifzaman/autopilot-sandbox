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
