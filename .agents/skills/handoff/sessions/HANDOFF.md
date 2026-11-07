# Portfolio & Projects Handoff — November 2026

## 🎯 Executive Summary & Architectural Milestone

This repository (`ankhang0704.github.io`) is a minimalist personal software engineering portfolio and product showcase built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript 5**, and **Tailwind CSS**. It is deployed natively as a 100% static export (`output: "export"`) to **Cloudflare Pages (`https://ankhang0704.pages.dev/`)**.

---

## 🛠 Architectural State & Recent Achievements

### 1. 100% Static HTML Export (`output: "export"`)

- **Zero Serverless / Zero Edge Middleware**: 10 static objects generated in ~400ms.
- **5 Canonical Web Pages**:
  1. [`/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/page.tsx) — Main Portfolio
  2. [`/projects/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/projects/page.tsx) — All Projects Interactive Directory (Dual View Grid & Data Sheet)
  3. [`/fm-dictionary/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/fm-dictionary/page.tsx) — FM Dictionary case study (includes Interactive Term Inspector)
  4. [`/github-vault-relay/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/github-vault-relay/page.tsx) — GitHub Vault Relay case study
  5. [`/hotel-management/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/hotel-management/page.tsx) — Hotel Management AI case study
  - Plus [`/not-found`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/not-found.tsx) (`404.html`), `sitemap.xml`, and `robots.txt`.

### 2. UI Overhaul Deliverables (November 2026)

- **Custom Precision Scrollbar**: 6px slim bar with 0px sharp thumb, adaptive Dark/Light mode contrast.
- **Bespoke Minimalist AK Monogram Logo & Favicon**: 100% original, pure typographic ligature combining **A** and **K** (An Khang) with a shared central vertical spine, symmetrical 45° cantilever branches, embedded in Header, Footer, and browser tab favicon (`favicon.ico`, `icon.svg`, and Apple touch icon).
- **Projects Directory Dual View**: Real-time category filtering (Mobile, Backend, Tools), instant search input, and toggle between Visual Grid and Technical Data Sheet table.
- **Interactive Term Inspector**: Live facilities management simulator in `/fm-dictionary/` with real data from `.archived/fm_dictionary_landing` (VAV Box, Centrifugal Chiller, BMS, AHU, PPM; UK/US phonetics, ASHRAE/AHRI/ISO standards, audio pronunciation simulation, and quiz protocol).

---

## 🚦 Current Health & Verification Status

- `npm run lint`: **0 errors, 0 warnings**.
- `npm run typecheck`: **0 errors**.
- `npm run build`: **10/10 static pages generated successfully in ~409ms**.
- **Git State**: Clean working tree, synced with `origin/main` (commit `66a2df8`).
