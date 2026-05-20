Project workflow & contribution guidelines

This repository includes minimal workflow scaffolding to get started.

Goals:
- Provide ISSUE and PR templates for consistent reporting.
- Add a lightweight CI placeholder workflow that always passes until real jobs are added.
- Document branching, PR checklist, and release guidance.

Branching
- `main`: stable production-ready code. Protect with required reviews before merging.
- feature branches: `feature/<short-description>`
- bugfix branches: `bugfix/<short-description>`

PR process
- Open a PR from a feature/bugfix branch into `main`.
- Fill the PR template to describe changes and testing done.
- At least one approving review required before merge.

Issue templates
- Use the provided issue templates when opening issues: bug reports and feature requests.

CI
- A placeholder GitHub Actions workflow exists at `.github/workflows/ci.yml`.
- Replace the job steps with real build/test/lint steps for your stack.

Local checks
- Add unit tests and run `npm test` to verify before pushing.

Next steps
- Tell me your project's language and test command and I will update the CI to run real checks.
