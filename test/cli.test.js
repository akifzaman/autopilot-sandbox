import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const cliPath = path.resolve('bin/cli.js');

function run(args) {
  const result = spawnSync('node', [cliPath, ...args], { encoding: 'utf8' });
  return result;
}

test('cli capitalize works', () => {
  const { stdout, status } = run(['capitalize', 'hello']);
  assert.equal(status, 0);
  assert.equal(stdout.trim(), 'Hello');
});

test('cli slugify works', () => {
  const { stdout, status } = run(['slugify', 'Hello World']);
  assert.equal(status, 0);
  assert.equal(stdout.trim(), 'hello-world');
});

test('cli truncate works', () => {
  const { stdout, status } = run(['truncate', 'hello world', '6']);
  assert.equal(status, 0);
  assert.equal(stdout.trim(), 'hello…');
});

test('cli unknown command gives usage and exit 1', () => {
  const { stderr, status } = run(['shout', 'hi']);
  assert.equal(status, 1);
  assert.match(stderr, /Usage/);
});

test('cli missing args gives usage and exit 1', () => {
  const { stderr, status } = run(['slugify']);
  assert.equal(status, 1);
  assert.match(stderr, /Usage/);
});
