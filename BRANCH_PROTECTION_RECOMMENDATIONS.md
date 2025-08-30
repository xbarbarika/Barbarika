# Branch Protection Recommendations

## 1. Protect Main and Development Branches

- Go to your repository’s Settings > Branches.
- Add branch protection rules for `main` and `development` branches:
    - Require pull request reviews before merging (at least 1 reviewer).
    - Require status checks to pass (if you have CI/CD).
    - Restrict who can push to the branch (typically only admins or maintainers).
    - Optionally: Require linear history.
    - Optionally: Require signed commits.

## 2. Enforce via Team Process

- Communicate to your team: all code must go through pull requests, no direct pushes.
- Use GitHub Projects/boards to track PRs and code review progress.

## 3. Review Regularly

- Use the Commits and Pull Requests tabs to review daily changes.
- Encourage the team to link PRs to issues for traceability.

## 4. (Optional) Enable Required Status Checks

- If you use Actions or another CI, require those checks to pass before merging.