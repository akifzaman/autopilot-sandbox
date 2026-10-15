import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reverse } from '../src/index.js';

test('reverse simple string', () => {
  assert.equal(reverse('abc'), 'cba');
});

test('reverse handles Unicode code points (emoji)', () => {
  assert.equal(reverse('👩‍💻'), '💻‍👩');
});

test('reverse rejects non-strings', () => {
  assert.throws(() => reverse(123), TypeError);
});
