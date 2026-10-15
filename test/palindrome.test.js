import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isPalindrome } from '../src/index.js';

test('palindrome true for simple case', () => {
  assert.equal(isPalindrome('madam'), true);
});

test('palindrome true ignoring case and punctuation', () => {
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
});

test('palindrome false for non‑palindrome', () => {
  assert.equal(isPalindrome('hello'), false);
});

test('non‑string input throws TypeError', () => {
  assert.throws(() => isPalindrome(123), TypeError);
});
