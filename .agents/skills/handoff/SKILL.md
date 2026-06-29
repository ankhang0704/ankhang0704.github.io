---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up. Use when transferring context between agents.
---
# Handoff Skill

## Quick start
Write a handoff document summarising the current conversation so a fresh agent can continue the work. Write the document directly to a file named `HANDOFF.md` in the root of the workspace, overwriting the file if it already exists.

## Workflows
1. Summarize current conversation, focusing on what was achieved for the landing page project.
2. Note any specific layout or functionality bugs (e.g. Dark/Light mode, Bilingual support) currently being worked on.
3. Include a "suggested skills" section in the document, suggesting skills that the next agent should invoke.
4. Do not duplicate content already captured in other artifacts. Reference them by path or URL instead.
5. Redact any sensitive information.
6. After creating the handoff document, ALWAYS execute `git add .`, `git commit -m "chore: save progress for handoff"` (or a descriptive message of the latest uncommitted changes), and `git push` to ensure all progress is safely saved to the remote repository.

## Design & Refinement Principles (Portfolio Maintenance)

When performing a handoff or refining components, agents must adhere to the following principles:

### A. Whole-page coherence over individual component brilliance
When reviewing or redesigning a component, always evaluate it in the context of the entire page. A component should feel native to the overall design language rather than visually impressive in isolation. Avoid introducing patterns, layouts, or visual styles that draw unnecessary attention or feel transplanted from another design system.

### B. Prefer subtraction over addition
Before proposing new decorative elements, first ask whether removing or simplifying existing elements would produce a better result. Whitespace, typography, rhythm, and composition should be trusted before introducing additional visual assets or effects.

### C. Portfolio freshness
For personal portfolio projects, the footer should include a subtle "Updated · <Month Year>" indicator. This is considered part of the portfolio's design language rather than page content. Whenever the portfolio is intentionally updated or refined, this date should be updated automatically to reflect the current month and year of the handoff, without requiring an explicit reminder from the user. The update indicator should remain subtle, secondary to the copyright line, and should never become a primary visual element.
