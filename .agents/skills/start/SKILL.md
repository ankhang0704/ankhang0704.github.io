---
name: start
description: Resume work from a previous session by reading the handoff document, checking git state, and reviewing referenced files. Use when starting a new session, resuming work, or when user says "start", "begin", "pick up where we left off", "continue".
argument-hint: "Any specific focus for this session?"
---

# Start — Session Bootstrap

Read the last handoff, scan the repo state, and brief yourself before writing any code.

## Procedure

1. **Read the handoff document** from `.agents/skills/handoff/sessions/HANDOFF.md` (or `HANDOFF.md` in repository root).
   - If the file does not exist, report that no handoff was found and proceed to step 2 anyway.

2. **Check git state:**
   - `git branch --show-current` — what branch are we on?
   - `git log --oneline -5` — last 5 commits.
   - `git status --short` — any uncommitted changes?
   - `git stash list` — any stashed work?

3. **Read key files** mentioned in the handoff (section "Key files touched" and "In progress"). Open and skim each one to confirm they exist and match the described state.

4. **Check build health** (if project is initialized):
   - Does `package.json` exist? If yes, check if `node_modules/` exists.
   - Are there any `.env.local` or config files present?
   - Can the project build/lint without errors?

5. **Produce a briefing** for the user with:
   - 🔀 **Branch & last commit** — where we are in git.
   - 📋 **Previous session summary** — from the handoff.
   - 🚧 **Unfinished work** — anything in progress or uncommitted.
   - ✅ **Next steps** — prioritized from the handoff, adjusted if the user passed arguments.
   - ❓ **Open questions** — any blockers or decisions needed.
   - 🛠️ **Suggested skills** — from the handoff or inferred from the next steps.

6. **If the user passed arguments**, treat them as the focus for this session. Reprioritize the next steps accordingly and note any handoff items that are now lower priority.

## Output format

Keep the briefing concise — a short summary, not a wall of text. Use bullet points. Link to files with clickable paths. End with a clear question: "Ready to start on [top priority]?"
