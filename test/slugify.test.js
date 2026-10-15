import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/index.js';

test('slugify basic example', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('slugify trims and diacritics', () => {
  assert.equal(slugify('  Café au Lait!  '), 'cafe-au-lait');
});

test('slugify handles special characters', () => {
  assert.equal(slugify('Node.js & Deno'), 'node-js-deno');
});

test('slugify empty output for non-alphanum', () => {
  assert.equal(slugify('---'), '');
});

test('slugify throws on non-string', () => {
  assert.throws(() => slugify(42), TypeError);
});
