# An Khang Portfolio

Local Next.js portfolio and FM Dictionary product page for An Khang, a Software Developer working across web, mobile, automation, and hands-on IT support.

## Routes

- Localized portfolio home: `/en/` and `/vi/`
- Project index: `/en/projects/` and `/vi/projects/`
- Case studies: FM Dictionary and Hotel Management
- FM Dictionary legal/support pages remain under `/[lang]/fm-dictionary/`

## Project groups

- Products: FM Dictionary
- Open Source: GitHub Vault Relay
- Client / Collaboration: KOI Phan Thiết
- Tools / Automation: Python IP Checker
- Academic: Hotel Management

## Local development

```bash
npm install
npm run dev
```

Verification commands:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The current phase is local-only. No deployment or production push is part of this work.

## Design

The monochromatic editorial visual system is documented in [docs/design/DESIGN.md](./docs/design/DESIGN.md). Preserve the existing visual language while keeping project claims tied to canonical source material.
