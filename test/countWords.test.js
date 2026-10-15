import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countWords } from '../src/index.js';

test('countWords returns correct count for regular sentence', () => {
  assert.equal(countWords('hello world'), 2);
});

test('countWords handles multiple spaces', () => {
  assert.equal(countWords('  hello   world  this is   test  '), 5);
});

test('countWords returns 0 for empty string', () => {
  assert.equal(countWords(''), 0);
});

test('countWords returns 0 for whitespace only', () => {
  assert.equal(countWords('   \t\n  '), 0);
});

test('countWords throws TypeError for non-string', () => {
  assert.throws(() => countWords(123), TypeError);
});
