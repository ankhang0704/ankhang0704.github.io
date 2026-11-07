# Portfolio & Projects Handoff — November 2026

## 🎯 Executive Summary & Architectural Milestone

This repository (`ankhang0704.github.io`) is a minimalist personal software engineering portfolio and product showcase built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript 5**, and **Tailwind CSS**. It is deployed natively as a 100% static export (`output: "export"`) to **Cloudflare Pages (`https://ankhang0704.pages.dev/`)**.

---

## 🛠 Architectural State

### 1. 100% Static HTML Export (`output: "export"`)

- **Zero Serverless / Zero Edge Middleware**: 10 static objects generated in ~360-400ms.
- **5 Canonical Web Pages**:
  1. [`/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/page.tsx) — Main Portfolio (Hero, Stats, Experience, Projects showcase, Tech stack, Education, Contact)
  2. [`/projects/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/projects/page.tsx) — All Projects index with technical specs and filtering
  3. [`/fm-dictionary/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/fm-dictionary/page.tsx) — FM Dictionary case study (Flutter, Hive Offline, Cloudflare STT Proxy, App Store)
  4. [`/github-vault-relay/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/github-vault-relay/page.tsx) — GitHub Vault Relay case study (Obsidian Plugin, GitHub REST API)
  5. [`/hotel-management/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/hotel-management/page.tsx) — Hotel Management AI case study (Django 5, RAG, FAISS Vector Search)
  - Plus [`/not-found`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/not-found.tsx) (`404.html`), `sitemap.xml`, and `robots.txt`.

### 2. Diagnosis & Fix: 404 Page Hydration & Link Navigation

- **Issue**: Clicking links on the 404 page failed or behaved unreliably.
- **Root Cause**: `src/app/not-found.tsx` redundantly rendered `<html><head><body>...</body></html>`, creating invalid nested HTML inside Next.js's `RootLayout`. The browser's DOM parser disrupted the tree, causing a fatal React hydration crash that unbound Next.js router event listeners on `<Link>`.
- **Resolution**: Refactored [`src/app/not-found.tsx`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/not-found.tsx) into a first-class content component with global `Header`, `Footer`, `ThemeContext` (Dark/Light mode), and `LanguageContext` (Bilingual EN/VI). Validated: exactly 1 `<html>` and 1 `<body>` tag in static build.
- **Design Spec Redesign**: Completely updated [`docs/design/DESIGN.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/docs/design/DESIGN.md) to reflect the 404 architecture, React Bits motion suite (replacing GSAP), and zero-latency client i18n.

### 3. Pre-Commit Hooks & Quality Assurance

- Husky v9 + lint-staged + Prettier automatically run on every commit.
- `npm run typecheck` (`tsc --noEmit`) validates TypeScript integrity prior to committing.

---

## 🚦 Current Health & Verification Status

- `npm run lint`: **0 errors, 0 warnings**.
- `npm run typecheck`: **0 errors**.
- `npm run build`: **10/10 static pages generated successfully in ~360ms**.
- **Git State**: Clean working directory, synced with `origin/main`.
