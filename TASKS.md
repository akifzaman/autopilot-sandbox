# Tasks

<!--
Hermes Autopilot task format. Keep tasks in execution order.

  ## [ ] T<n> — <short title>        unchecked = not done; [x] = done
  - spec: <path#anchor>               spec section the task implements
  - blocked-by: none | T<a>, T<b>     tasks that must be [x] first
  ### Acceptance criteria
  - <observable, testable statement>

"Next task" = the first `## [ ]` task whose blocked-by tasks are all `[x]`
and that has no open PR on a branch named autopilot/T<n>-*.
Autopilot ticks the box ([ ] -> [x]) inside the same PR that implements the task,
so the task only counts as done once a human merges that PR.
-->

## [x] T1 — Add slugify
- spec: docs/spec/string-utils.md#slugify
- blocked-by: none

### Acceptance criteria
- `slugify` is exported from `src/index.js`.
- All four examples in the spec table produce the listed output.
- Non-string input throws `TypeError`.
- `npm run lint` and `npm test` pass.

## [ ] T2 — Add truncate
- spec: docs/spec/string-utils.md#truncate
- blocked-by: none

### Acceptance criteria
- `truncate` is exported from `src/index.js`.
- All three examples in the spec table produce the listed output.
- Result length never exceeds `maxLength`.
- Invalid `text` throws `TypeError`; invalid `maxLength` (0, -1, 2.5, `'5'`) throws `RangeError`.
- `npm run lint` and `npm test` pass.

## [ ] T3 — Add strutil CLI
- spec: docs/spec/string-utils.md#cli
- blocked-by: T1, T2

### Acceptance criteria
- `bin/cli.js` exists and `package.json` declares the `strutil` bin.
- The three example commands in the spec behave as listed (stdout and exit code).
- Tests run the CLI as a child process and cover success, unknown command and missing arguments.
- `npm run lint` and `npm test` pass.
