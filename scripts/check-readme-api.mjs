// CI-only docs check: every function exported from src/index.js must be documented
// in README.md under "## API" as a bullet like: - `name(args)` — description
import { readFileSync } from 'node:fs';

const index = readFileSync('src/index.js', 'utf8');
const exported = [...index.matchAll(/export\s*\{([^}]*)\}/g)]
  .flatMap((m) => m[1].split(','))
  .map((name) => name.trim().split(/\s+as\s+/).pop())
  .filter(Boolean);

const readme = readFileSync('README.md', 'utf8');
const api = readme.split(/^## API\s*$/m)[1]?.split(/^## /m)[0] ?? '';
const missing = exported.filter((name) => !api.includes('`' + name + '('));

if (missing.length > 0) {
  console.error(`README.md "## API" section is missing: ${missing.join(', ')}`);
  console.error('Document each exported function as a bullet: - `name(args)` — description');
  process.exit(1);
}
console.log(`README API docs cover: ${exported.join(', ')}`);
