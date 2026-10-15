import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reverse } from '../src/index.js';

test('reverse returns the string reversed by Unicode code points', () => {
  assert.equal(reverse('hello'), 'olleh');
  assert.equal(reverse('😀'), '😀'); // single code point emoji
  assert.equal(reverse('ab😀cd'), 'dc😀ba');
});

test('reverse throws TypeError for non-string input', () => {
  assert.throws(() => reverse(42), TypeError);
  assert.throws(() => reverse(null), TypeError);
  assert.throws(() => reverse(undefined), TypeError);
});