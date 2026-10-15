// Zero-dependency lint: syntax check + a few house rules for src/ and bin/.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const RULES = [
  { pattern: /\bconsole\.log\(/, message: 'console.log is not allowed in library code' },
  { pattern: /^\s*var\s/m, message: 'use let/const instead of var' },
  { pattern: /\bdebugger\b/, message: 'debugger statement left in code' },
];

function jsFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return jsFiles(path);
    return path.endsWith('.js') ? [path] : [];
  });
}

let problems = 0;
for (const file of [...jsFiles('src'), ...jsFiles('bin')]) {
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
  } catch (error) {
    console.error(`${file}: syntax error\n${error.stderr}`);
    problems++;
  }
  const source = readFileSync(file, 'utf8');
  const isCli = file.startsWith('bin');
  for (const rule of RULES) {
    if (isCli && rule.message.startsWith('console.log')) continue; // CLIs may print
    if (rule.pattern.test(source)) {
      console.error(`${file}: ${rule.message}`);
      problems++;
    }
  }
}

if (problems > 0) {
  console.error(`lint failed: ${problems} problem(s)`);
  process.exit(1);
}
console.log('lint passed');
