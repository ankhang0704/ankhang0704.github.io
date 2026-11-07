---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up.
argument-hint: "What will the next session be used for?"
---

Before writing the handoff, inspect the current Git working tree, the latest commit, and the latest verified test and validation results. Ensure the handoff reflects the newest repository state. Do not preserve stale test counts, outdated completion statuses, obsolete artifact paths, or tasks that have already been completed.

Write the handoff document directly to `.agents/skills/handoff/sessions/HANDOFF.md` (and keep or mirror `HANDOFF.md` in repository root for convenience).
**Always overwrite / replace the old file** so that only a single, current `HANDOFF.md` file exists inside `sessions/`, keeping the repository clean and concise.

Include these sections in the handoff:

1. **Session summary** — what was accomplished this session.
2. **Current state** — branch, latest commit SHA, build/test status.
3. **In progress** — any unfinished work, with file paths.
4. **Next steps** — prioritized list of what to do next.
5. **Key files touched** — paths to files created or modified this session.
6. **Open questions** — unresolved decisions or blockers.
7. **Suggested skills** — only skills that actually exist in `.agents/skills/`. Verify each before naming it.

Do not duplicate content already captured in other artifacts (PRDs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead.

Redact any sensitive information, such as API keys, passwords, or personally identifiable information.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.

After creating the handoff document, run `git status --short` and review the working tree.

Stage only the handoff file (`.agents/skills/handoff/sessions/HANDOFF.md` / `HANDOFF.md`) and files intentionally changed as part of the completed task. Never use `git add .` without first verifying every untracked and modified file. Do not stage raw client data, generated run artifacts, secrets, credentials, local environment files, or unrelated changes.

If there are relevant uncommitted changes, create a descriptive commit and push the current branch to its configured remote. If there are no changes, do not create an empty commit.

Afterward, report:

- the files staged;
- the commit SHA, or that no commit was necessary;
- the branch and remote pushed;
- whether the push succeeded.

If committing or pushing cannot be completed, preserve the handoff file locally and clearly report the exact blocker instead of claiming that progress was saved remotely.

---

## Design & Refinement Principles (Portfolio Maintenance)

When performing a handoff or refining components in this portfolio repository, agents must adhere to the following principles:

### A. Whole-page coherence over individual component brilliance

When reviewing or redesigning a component, always evaluate it in the context of the entire page. A component should feel native to the overall design language rather than visually impressive in isolation. Avoid introducing patterns, layouts, or visual styles that draw unnecessary attention or feel transplanted from another design system.

### B. Prefer subtraction over addition

Before proposing new decorative elements, first ask whether removing or simplifying existing elements would produce a better result. Whitespace, typography, rhythm, and composition should be trusted before introducing additional visual assets or effects.

### C. Portfolio freshness

For personal portfolio projects, the footer should include a subtle "Updated · <Month Year>" indicator. This is considered part of the portfolio's design language rather than page content. Whenever the portfolio is intentionally updated or refined, this date should be updated automatically to reflect the current month and year of the handoff, without requiring an explicit reminder from the user. The update indicator should remain subtle, secondary to the copyright line, and should never become a primary visual element.
