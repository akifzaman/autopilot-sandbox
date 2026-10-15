# AGENTS.md

Instructions for AI coding agents (Hermes Autopilot reads this automatically).

## Project
`autopilot-sandbox` is a tiny, dependency-free string utilities library with a CLI.
It exists to exercise Hermes Autopilot end to end.

## Commands
- Install: none (zero dependencies)
- Lint: `npm run lint`
- Test: `npm test`
Both must pass before a commit is pushed.

## Layout
- `src/strings.js` — all string functions
- `src/index.js` — public exports (add every new function here)
- `bin/cli.js` — command-line wrapper (task T3)
- `test/*.test.js` — tests using the built-in `node:test` runner
- `scripts/lint.mjs` — lint rules (syntax check, no `console.log` in `src/`, no `var`, no `debugger`)
- `docs/spec/string-utils.md` — behaviour spec, source of truth
- `TASKS.md` — ordered task list

## Rules
- Node.js built-ins only. Do not add npm dependencies.
- ES modules (`import`/`export`), `const`/`let`, no `var`.
- Implement only what the task and its spec section ask for. No unrelated refactors.
- Every behaviour in the acceptance criteria gets a test in `test/`.
- If the spec is ambiguous, stop and ask instead of guessing.
