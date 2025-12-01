# bmaderp

Repository scaffolded with minimal workflow files.

Getting started

Configure CI

Run tests locally

Example
```bash
npm test
```
# bmaderp

A small scaffold for the `bmaderp` project that includes basic contributor
guidance and a Node CI workflow. Use this as a starting point — replace and
extend files to match your project's language and requirements.

**Quickstart**
- **Clone:** `git clone <repo-url>`
- **Open:** `cd /home/riddler/bmaderp`

**Run tests (local)**
- Install Node.js (recommended LTS).
- Run the test script: `npm test`

**What’s included**
- `WORKFLOW.md`: branching, PR process and contribution notes.
- `.github/workflows/node-ci.yml`: Node CI workflow (installs deps, runs `npm test`).
- `.github/workflows/ci.yml`: placeholder CI (editable).
- `.github/ISSUE_TEMPLATE/*`: issue templates for bugs and feature requests.
- `.github/PULL_REQUEST_TEMPLATE.md`: PR template.

**Node CI behavior**
- By default (push / PR) the Node CI workflow requires a `package.json` and
	will fail if it is missing.
- You can run the workflow manually via GitHub Actions `workflow_dispatch` and
	set the `node_ci_required` input to `false` to make Node checks optional.

**Contributing**
- Read `WORKFLOW.md` for branching and PR guidance.
- Use the issue and PR templates when filing new work.

If you'd like, I can expand this README with a project-specific setup (DB,
build steps, environment variables) — tell me what stack you're using.
