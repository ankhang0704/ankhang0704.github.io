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
