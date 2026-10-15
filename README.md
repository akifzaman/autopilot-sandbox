# autopilot-sandbox

Tiny dependency-free string utilities library, used to test Hermes Autopilot.

```bash
npm run lint
npm test
```

## API

- `capitalize(text)` — uppercase the first character, leave the rest unchanged.
- `slugify(text)` — URL-friendly slug: lowercase, diacritics removed, `-` between words.
- `truncate(text, maxLength)` — shorten to maxLength, adding ellipsis if truncated.
- `max(numbers)` — returns the largest number in an array, -Infinity for empty, throws TypeError for invalid input.

## Docs

- Spec: [docs/spec/string-utils.md](docs/spec/string-utils.md)
- Tasks: [TASKS.md](TASKS.md)
- Agent instructions: [AGENTS.md](AGENTS.md)
