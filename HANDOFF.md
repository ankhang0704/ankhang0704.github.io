# Portfolio Performance, Safari UX, Web CV & Brand Mark Handoff — November 2026

## 🎯 Executive Summary

This repository ([`ankhang0704.github.io`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io)) is the personal software engineering portfolio and product showcase for **An Khang** (Software Developer).

Across this session (`ccab086`, `153bef4`, and the concluding feature/brand commit), the portfolio underwent a comprehensive mobile performance pass, Safari UX fixes, dark-mode view transition repair, recruiting/shareability upgrades, and a geometric `K■` brand icon refresh:

- **Mobile Scroll & Compositor Performance (`ccab086`, `153bef4`)**: Moved `#scroll-progress-bar` onto GPU-native `animation-timeline: scroll(root block)` with cached-metric JS fallback, switched Hero to `min-h-[100svh]` and containers to `overflow-x-clip`, eliminated `applyBaseStyles: true` duplicate Tailwind CSS (~45% reduction), and cleaned View Transition listener/observer/RAF leaks across all interactive components.
- **Safari Double-Tap Zoom & Dark-Mode White Flash Fixes (`153bef4`)**: Added `touch-action: manipulation`, `pointer-events: none` on header icon/span children, `44px` hit targets, `16px` mobile search inputs, `@media (hover: hover) and (pointer: fine)` hover gating, `astro:before-swap` `.dark` + `#theme-color-meta` preservation, `html`/`::view-transition` backgrounds, `transition:animate="none"` on `#navbar`, and instant above-the-fold rendering on `/projects/`.
- **Shareability, Printable Web CV, Self-Hosted Fonts & `K■` Brand Mark**:
  - Generated `1200×630` editorial OG social card ([`og-card.png`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/og-card.png)) and set it as default `ogImage` with `og:image:width`/`height`/`alt` in [`BaseLayout.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/layouts/BaseLayout.astro).
  - Redesigned [`icon.svg`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/icon.svg) (`555 B`) to the `0px` architectural `K■` mark matching the `KHANG` + `■` header, synced [`icon.png`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/icon.png), [`apple-touch-icon.png`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/apple-touch-icon.png), and compressed [`favicon.ico`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/favicon.ico) (`2,771 B`).
  - Enabled dedicated bilingual case study routes (`/koi-phan-thiet/`, `/python-ip-checker/`, and `/vi/*` equivalents) and built printable Web CV pages at `/cv/` and `/vi/cv/` ([`CvPage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/cv/CvPage.astro)) with A4 `@media print` CSS.
  - Self-hosted `@fontsource-variable/inter` and `@fontsource-variable/space-grotesk` (zero `fonts.googleapis.com` requests) and pruned unused keys/helpers from [`en.json`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/dictionaries/en.json), [`vi.json`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/dictionaries/vi.json), and [`utils.ts`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/i18n/utils.ts).

---

## 1. 📋 Session Summary

- Replaced JS `rAF` scroll progress calculation with CSS Scroll-Driven Animations + non-thrashing fallback (`ccab086`).
- Executed a multi-agent `/swarm` audit (`safari-transitions`, `runtime-perf`, `assets-arch`, `verifier`) and landed 21 fixes across core layout, runtime islands, pages, `404.astro`, `_redirects`, and removed duplicate `public/fm-offline-architecture.webp` (`153bef4`).
- Built `public/og-card.png`, enabled `/koi-phan-thiet/` & `/python-ip-checker/` case studies, added `/cv/` & `/vi/cv/` printable Web CV, migrated Google Fonts to self-hosted `@fontsource-variable/*`, cleaned `i18n` dictionaries, and replaced the squircle `AK` icon with the `0px` `K■` brand mark across SVG/PNG/ICO/OG assets.

---

## 2. 🚦 Current State

- **Branch**: `main` (pushed with `origin/main`).
- **Recent Commits**: `ccab086` (GPU scroll progress), `153bef4` (Safari zoom, dark-mode swap flash, duplicate CSS & runtime leaks), followed by the current session-closing commit.
- **Build & Quality Assurance**:
  - `npm run lint` (`astro check`): **0 errors, 0 warnings, 0 hints** across **31 files**.
  - `npm run build` (`astro build`): **17 static pages** compiled cleanly in `8.88s` to [`dist/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/dist/) (`/`, `/cv/`, `/projects/`, 5 case studies, `/vi/*` equivalents, and `/404.html`, plus `dist/sitemap-0.xml` with 16 canonical URLs).
  - **Pre-commit Hooks**: Husky + `lint-staged` (Prettier + `astro check`).

---

## 3. 🚧 In Progress

None. All planned implementation, formatting, lint, and build checks are complete.

---

## 4. ✅ Next Steps

1. **Live Production & Mobile Verification (`https://ankhang0704.pages.dev/`)**:
   - Confirm Safari iOS double-tap no longer zooms `#navbar` controls, dark-mode `/` → `/projects/` transitions have no white flash, `K■` favicon/Apple Touch Icon updates properly, and `/cv/` prints cleanly to A4 PDF.
   - Verify Open Graph social preview card (`og-card.png` `1200×630`) via LinkedIn/Facebook/Zalo sharing debuggers.
2. **Performance Benchmark (Optional)**:
   - Run PageSpeed Insights / Lighthouse on `/` and `/fm-dictionary/` to inspect live Core Web Vitals after self-hosted font migration.
3. **Future Content/Edge Enhancements (Optional)**:
   - Add `/notes/` engineering articles or Cloudflare Pages Functions contact handler if needed later.

---

## 5. 📂 Key Files Touched

- **Brand, OG & Icons**: [`public/icon.svg`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/icon.svg), [`public/icon.png`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/icon.png), [`public/apple-touch-icon.png`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/apple-touch-icon.png), [`public/favicon.ico`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/favicon.ico), [`public/og-card.png`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/og-card.png).
- **Web CV & Case Studies**: [`src/components/cv/CvPage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/cv/CvPage.astro), [`src/pages/cv/index.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/pages/cv/index.astro), [`src/pages/vi/cv/index.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/pages/vi/cv/index.astro), [`src/content/projects/en/koi-phan-thiet.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/en/koi-phan-thiet.md), [`src/content/projects/vi/koi-phan-thiet.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/vi/koi-phan-thiet.md), [`src/content/projects/en/python-ip-checker.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/en/python-ip-checker.md), [`src/content/projects/vi/python-ip-checker.md`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects/vi/python-ip-checker.md).
- **Core Layout, Fonts, i18n & Links**: [`package.json`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/package.json), [`package-lock.json`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/package-lock.json), [`tailwind.config.js`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/tailwind.config.js), [`src/layouts/BaseLayout.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/layouts/BaseLayout.astro), [`src/styles/global.css`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/styles/global.css), [`src/components/home/HomePage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/HomePage.astro), [`src/components/ui/Footer.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Footer.astro), [`src/components/case-study/CaseStudyPage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/case-study/CaseStudyPage.astro), [`src/dictionaries/en.json`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/dictionaries/en.json), [`src/dictionaries/vi.json`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/dictionaries/vi.json), [`src/i18n/utils.ts`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/i18n/utils.ts).
- **Earlier Session Commits (`ccab086`, `153bef4`)**: [`astro.config.mjs`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/astro.config.mjs), [`public/_redirects`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/public/_redirects), [`src/components/ui/Header.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Header.astro), [`src/components/projects/ProjectsIndexPage.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/projects/ProjectsIndexPage.astro), [`src/pages/404.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/pages/404.astro), and interactive/UI islands under `src/components/`.

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
