import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/index.js';

test('slugify examples', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
  assert.equal(slugify('  Café au Lait!  '), 'cafe-au-lait');
  assert.equal(slugify('Node.js & Deno'), 'node-js-deno');
  assert.equal(slugify('---'), '');
});

test('slugify rejects non-strings', () => {
  assert.throws(() => slugify(123), TypeError);
});
