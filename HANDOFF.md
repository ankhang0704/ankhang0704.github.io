# Portfolio Pass A Handoff — September 2026

Pass A establishes the local structure, content model, and routes for the portfolio narrative.

## Current positioning

An Khang is presented as a **Software Developer** working across web, mobile, and automation, with hands-on IT support experience.

## Architecture

- Next.js App Router with localized `/en/` and `/vi/` subpaths.
- Homepage order: hero, short positioning, selected work, capabilities, experience, all-projects CTA, contact.
- Shared project metadata lives in `src/content/projects.ts`.
- Shared experience metadata lives in `src/content/experience.ts`.
- Localized visible copy lives in `src/dictionaries/en.json` and `src/dictionaries/vi.json`.
- Project index routes are `/[lang]/projects/`.

## Canonical content decisions

- Selected work: FM Dictionary, GitHub Vault Relay, Hotel Management.
- The old IT infrastructure case study and unsupported reliability metrics were removed.
- Hotel content reflects the Django monolith, server-rendered templates, SQLite, booking workflows, RAG, Groq, optional local LlamaCpp/Phi-4, and six focused tests.
- Experience contains the current hospital helpdesk role, SOJO actual work, earlier Sailing Bay internship, and the 2022–2026 degree. No unemployment entry is created.
- Next.js Platform is not presented as a public project.

## Verification

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` from the repository root. This phase is local-only; do not deploy or push production.
