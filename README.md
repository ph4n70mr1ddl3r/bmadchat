# bmadchat

![Node CI](https://github.com/ph4n70mr1ddl3r/bmadchat/actions/workflows/node-ci.yml/badge.svg)

A scaffold for the bmadchat project with contributor guidance, BMAD agent
chatmode definitions, and Node CI.

## Quickstart

```bash
git clone <repo-url>
cd bmadchat
npm install
npm test
```

## Scripts

| Script         | Description                                  |
|----------------|----------------------------------------------|
| `npm run build`| Compile TypeScript to `dist/`                |
| `npm run lint` | Lint `src/` and `test/` with ESLint          |
| `npm test`     | Run Jest with coverage and JUnit reporting   |
| `npm run clean`| Remove `dist/` and `coverage/`               |

## What's included

- **BMAD agent chatmodes** (`.github/chatmodes/`): persona definitions for
  analyst, architect, dev, PM, PO, QA, SM, UX-expert, and more.
- **Node CI** (`.github/workflows/node-ci.yml`): install, lint, build, test
  on push/PR to `main`.
- **Issue & PR templates** (`.github/`): bug report, feature request, and
  pull request templates.
- **Dependabot**: weekly npm + GitHub Actions dependency updates.
- **`WORKFLOW.md`**: branching, PR process, and contribution guidelines.

## Contributing

See [WORKFLOW.md](./WORKFLOW.md) for branching and PR guidance.
Use the issue and PR templates when filing new work.
