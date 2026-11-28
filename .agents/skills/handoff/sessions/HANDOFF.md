# Portfolio Projects Redesign, Copy & Handoff Cleanup — November 2026

## 🎯 Executive Summary

This repository ([`ankhang0704.github.io`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io)) is the personal software engineering portfolio and product showcase for **An Khang** (Software Developer).

Across the latest commits (`c088e4c`, `8c00a94`, `26985ad`), the portfolio was refined around editorial restraint, cleaner hierarchy in the featured projects showcase, and single-source handoff tracking:

- **Single Canonical Handoff (`c088e4c`)**: Removed the duplicate root `HANDOFF.md` so [`.agents/skills/handoff/sessions/HANDOFF.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/.agents/skills/handoff/sessions/HANDOFF.md) is the sole handoff document.
- **Hero & Footer Resume Refinement (`c088e4c`, `26985ad`)**: Simplified the Hero CTA to `View Resume` / `Xem CV` ([`HomePage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/HomePage.astro)) and replaced the Footer's dual CV/PDF buttons with a single editorial `Resume ↗` / `Xem CV ↗` link ([`Footer.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Footer.astro)).
- **Featured Projects Showcase Redesign (`26985ad`)**: Reworked `#projects` (*"Projects with a clear scope"*) in [`HomePage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/HomePage.astro) to alternate cleanly against `#about` (`bg-bgLight` / `bg-bgDark` with `bg-cardLight` / `bg-cardDark` cards), promoted **PRJ-01 (FM Dictionary)** into a full-width horizontal split flagship card (`lg:col-span-7` image + `lg:col-span-5` details), aligned **PRJ-02** & **PRJ-03** in an equal 2-column row underneath, removed image overlay pills and duplicate metadata lines, and converted secondary links into clean inline text links.
- **Concise Project Summaries (`26985ad`)**: Shortened `summary` across all 10 bilingual project files (`src/content/projects/{en,vi}/*.md`) to crisp single-sentence descriptions without repeating `specs`.

---

## 1. 📋 Session Summary

- Deleted duplicate root `HANDOFF.md` and consolidated Footer CV links (`c088e4c`, `8c00a94`).
- Evaluated `Graphify-Labs/graphify` (`graphifyy`) against this compact Astro repo and existing `codegraph` MCP.
- Redesigned `#projects` in [`HomePage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/HomePage.astro), tightened Hero/Footer Resume labels, and shortened all EN/VI project `summary` copy (`26985ad`).
- Verified visually via `astro preview` (`http://127.0.0.1:4321/`) across Desktop (`1440×900`) and Mobile (`390×844`) in both Dark and Light modes.

---

## 2. 🚦 Current State

- **Branch**: `main` (pushed to `origin/main`).
- **Latest Commits**: `26985ad` (featured projects layout & concise summaries), `8c00a94` (previous handoff), `c088e4c` (footer CV link & root `HANDOFF.md` removal), `f301e71` (K■ icons, OG card, Web CV, self-hosted fonts), followed by the current handoff commit.
- **Build & Quality Assurance**:
  - `npx prettier --write` on all touched files: passed.
  - `npm run lint` (`astro check`): **0 errors, 0 warnings, 0 hints** across **31 files**.
  - `npm run build` (`astro build`): **17 static pages** compiled cleanly in `4.50s` to [`dist/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/dist/).
  - **Pre-commit Hooks**: Husky + `lint-staged` (Prettier + `astro check`).

---

## 3. 🚧 In Progress

None. All edits, browser checks, lint, build, and commits are complete.

---

## 4. ✅ Next Steps

1. **Live Production & Mobile Verification (`https://ankhang0704.pages.dev/`)**:
   - Confirm the redesigned `#projects` flagship split + 2-column layout, concise project summaries, `View Resume` / `Resume ↗` labels, Safari iOS double-tap behavior, dark-mode transitions, `K■` icons, and `/cv/` A4 print layout on the live Cloudflare Pages deploy.
   - Verify Open Graph social preview card (`public/og-card.png` `1200×630`) via LinkedIn/Facebook/Zalo sharing debuggers.
2. **Performance Benchmark (Optional)**:
   - Run PageSpeed Insights / Lighthouse on `/` and `/fm-dictionary/` to inspect live Core Web Vitals.
3. **Future Content/Edge Enhancements (Optional)**:
   - Add `/notes/` engineering articles or Cloudflare Pages Functions contact handler if needed later.

---

## 5. 📂 Key Files Touched

- **Home & Footer UI**: [`src/components/home/HomePage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/HomePage.astro), [`src/components/ui/Footer.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Footer.astro)
- **Project Content (EN & VI `summary` copy)**: [`src/content/projects/en/fm-dictionary.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/en/fm-dictionary.md), [`src/content/projects/vi/fm-dictionary.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/vi/fm-dictionary.md), [`src/content/projects/en/github-vault-relay.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/en/github-vault-relay.md), [`src/content/projects/vi/github-vault-relay.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/vi/github-vault-relay.md), [`src/content/projects/en/hotel-management.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/en/hotel-management.md), [`src/content/projects/vi/hotel-management.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/vi/hotel-management.md), [`src/content/projects/en/koi-phan-thiet.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/en/koi-phan-thiet.md), [`src/content/projects/vi/koi-phan-thiet.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/vi/koi-phan-thiet.md), [`src/content/projects/en/python-ip-checker.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/en/python-ip-checker.md), [`src/content/projects/vi/python-ip-checker.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/vi/python-ip-checker.md)
- **Session Handoff**: [`.agents/skills/handoff/sessions/HANDOFF.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/.agents/skills/handoff/sessions/HANDOFF.md) (root `HANDOFF.md` deleted)

---

## 6. ❓ Open Questions

None.

---

## 7. 🛠️ Suggested Skills

Verified skills available in [`.agents/skills/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/.agents/skills/):

- `start`: Resume cleanly from this handoff in the next session.
- `handoff`: Capture updated session state at wrap-up.
- `improve-codebase-architecture`: Audit layout, responsiveness, and rendering performance.
- `taste-skill`: Maintain editorial typography, contrast, and anti-slop restraint.
- `checklist-design`: Verify UI completeness and accessibility checklists.
- `setup-pre-commit`: Maintain Husky and `lint-staged` commit gates.
