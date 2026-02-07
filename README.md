# bmaderp

![Node CI](https://github.com/ph4n70mr1ddl3r/bmaderp/actions/workflows/node-ci.yml/badge.svg)

A TypeScript library providing a simple `sum` function for adding two numbers together.

## Installation

```bash
npm install bmaderp
```

## Usage

```typescript
import { sum } from 'bmaderp';

const result = sum(1, 2);
console.log(result); // 3
```

## API

### `sum(a: number, b: number): number`

Adds two numbers together.

**Parameters:**
- `a` - The first number to add
- `b` - The second number to add

**Returns:** The sum of the two numbers

**Example:**

```typescript
sum(5, 3); // 8
sum(-1, 2); // 1
```

## Development

**Prerequisites**
- Node.js >= 18.0.0

**Run tests (local)**
```bash
npm install
npm test
```

**Build**
```bash
npm run build
```

**Lint**
```bash
npm run lint
```

**What's included**
- `WORKFLOW.md`: branching, PR process and contribution notes.
- `.github/workflows/node-ci.yml`: Node CI workflow (installs deps, runs lint, build, and test).
- `.github/ISSUE_TEMPLATE/*`: issue templates for bugs and feature requests.
- `.github/PULL_REQUEST_TEMPLATE.md`: PR template.

## Contributing

Read `WORKFLOW.md` for branching and PR guidance. Use the issue and PR templates when filing new work.

## License

MIT

