# String utilities

## Goal
A small, dependency-free string helper library with a command-line wrapper.
Every function is exported from `src/index.js` and lives in `src/strings.js`.

## capitalize
Already implemented. Uppercases the first character, leaves the rest unchanged.
Throws `TypeError` for non-string input.

## slugify

### Behaviour
- Signature: `slugify(text: string): string`.
- Lowercase the text.
- Remove diacritics (`é` → `e`) using Unicode NFD normalisation.
- Replace every run of characters that are not `a-z` or `0-9` with a single `-`.
- Trim leading and trailing `-`.
- Empty input, or input with no letters/digits, returns `''`.
- Throws `TypeError` for non-string input.

### Examples
| Input | Output |
|---|---|
| `'Hello World'` | `'hello-world'` |
| `'  Café au Lait!  '` | `'cafe-au-lait'` |
| `'Node.js & Deno'` | `'node-js-deno'` |
| `'---'` | `''` |

### Out of scope
- Non-Latin scripts (they become `''` or are dropped).

## truncate

### Behaviour
- Signature: `truncate(text: string, maxLength: number): string`.
- If `text.length <= maxLength`, return `text` unchanged.
- Otherwise return the first `maxLength - 1` characters followed by `…` (U+2026), so the result length is exactly `maxLength`.
- Throws `TypeError` if `text` is not a string.
- Throws `RangeError` if `maxLength` is not an integer `>= 1`.

### Examples
| Input | Output |
|---|---|
| `truncate('hello', 10)` | `'hello'` |
| `truncate('hello world', 6)` | `'hello…'` |
| `truncate('abc', 1)` | `'…'` |

## reverse

### Behaviour
- Signature: `reverse(text: string): string`.
- Returns the string reversed by Unicode code points.
- Throws `TypeError` for non-string input.

### Examples
| Input | Output |
|---|---|
| `reverse('hello')` | `'olleh'` |
| `reverse('😀')` | `'😀'` |
| `reverse('ab😀cd')` | `'dc😀ba'` |
| `reverse('')` | `''` |

### Out of scope
- Reversing by grapheme cluster (which would keep multi-code-point emoji intact).

## cli

### Behaviour
- File: `bin/cli.js`, runnable as `node bin/cli.js <command> <args...>`.
- Add `"bin": { "strutil": "bin/cli.js" }` to `package.json`.
- Commands:
  - `capitalize <text>` prints `capitalize(text)`.
  - `slugify <text>` prints `slugify(text)`.
  - `truncate <text> <maxLength>` prints `truncate(text, Number(maxLength))`.
- Output is printed to stdout followed by a newline; exit code `0`.
- Unknown command or missing arguments: print a usage line to stderr, exit code `1`.
- Errors thrown by the functions: print the error message to stderr, exit code `1`.

### Examples
| Command | stdout | exit |
|---|---|---|
| `node bin/cli.js slugify "Hello World"` | `hello-world` | 0 |
| `node bin/cli.js truncate "hello world" 6` | `hello…` | 0 |
| `node bin/cli.js shout hi` | (usage on stderr) | 1 |
