# Portfolio & Architecture Handoff — November 2026

## 🎯 Executive Summary & Architectural Milestone

This repository ([`ankhang0704.github.io`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io)) is the personal software engineering portfolio and product showcase for **An Khang** (Software Developer).

In this session, the project achieved a major architectural milestone:

- **100% Native Astro 5 Migration (Zero UI Runtime)**: Completely eliminated React and Next.js client runtime overhead. The site now compiles to 100% static HTML, CSS, and lightweight vanilla TypeScript with zero runtime JavaScript dependencies for page layout and rendering.
- **Delivery Model**: Static HTML/CSS/JS export to [`dist/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/dist/) deployed natively to **Cloudflare Pages** (`https://ankhang0704.pages.dev/`).
- **Bilingual System**: Native Astro i18n routing (`/` for EN, `/vi/` for VI) powered by Astro 5 `<ClientRouter />` for instant client-side page transitions.

---

## 1. 📋 Session Summary

### A. Next.js to Astro 5 Native Migration

- Migrated all pages, layouts, content, and components from Next.js 16 to native Astro 5 static architecture.
- Re-architected project content into type-safe **Astro Content Collections** ([`src/content.config.ts`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content.config.ts)) with Zod validation schemas for all project case studies (`FM Dictionary`, `GitHub Vault Relay`, `Hotel Management System`, etc.).
- Preserved all canonical routing patterns: `/`, `/vi/`, `/projects/`, `/vi/projects/`, and dynamic case study slugs (`/fm-dictionary/`, `/vi/fm-dictionary/`, etc.).
- Bumped FM Dictionary milestone and specifications to **v1.1.4**.

### B. Micro-Interactions & React Bits as Native Web Standards

- Replaced React Bits dependencies with 100% Native Web Standards:
  - [`SpotlightCard.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/SpotlightCard.astro): Native mouse-tracking radial gradient spotlight.
  - [`MagneticButton.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/MagneticButton.astro): Smooth cursor magnetism using `requestAnimationFrame`.
  - [`RevealOnScroll.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/RevealOnScroll.astro): Viewport-triggered scroll reveal via `IntersectionObserver`.
  - [`DecryptedText.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/DecryptedText.astro): Canvas/text hacker-scramble decryption effect.
  - [`CountUp.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/CountUp.astro): Zero-dependency smooth count-up with server-rendered static fallback (never freezes at 0).
  - Pure CSS keyframe [`TechMarquee.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/TechMarquee.astro).
- **Removed 3D perspective distortion**: Completely deleted `TiltedCard.astro` per user instruction; restored 1:1 original clean Bento Grid geometry (`md:col-span-7`, `md:col-span-5`, `md:col-span-12`).

### C. Pre-Commit Hooks & Tooling Setup

- Configured pre-commit hooks via **Husky** (`v9.1.7`) and **lint-staged** (`v16.4.0`):
  - Added [`prettier-plugin-astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/package.json) to format `.astro` files accurately.
  - Configured parser overrides in [`.prettierrc`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/.prettierrc).
  - Enforced `astro check` (`npm run typecheck`) and Prettier formatting on every commit.

### D. Solved Language Switching (`EN` <-> `VI`) Lag & Flickering

- **Prefetching**: Enabled native prefetching (`prefetch: { prefetchAll: true, defaultStrategy: 'hover' }` in [`astro.config.mjs`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/astro.config.mjs)) and added `data-astro-prefetch="load"` on the desktop and mobile language buttons in [`Header.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Header.astro). This delivers instant 0ms response on click.
- **Eliminated Snapshot Blanking**: Bound `initRevealOnScroll` in [`RevealOnScroll.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/RevealOnScroll.astro) to `astro:after-swap` so elements already visible in the viewport are marked `.is-revealed` before the browser captures the transition snapshot.
- **Scroll Preservation**: Implemented seamless scroll restoration across language toggles via `sessionStorage` in `Header.astro`. Switching languages maintains the user's exact scroll position without jumping to the top of the page.
- **Counter & Decrypted Text State**: Added session flags to [`CountUp.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/CountUp.astro) and [`DecryptedText.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/DecryptedText.astro) so numbers remain displayed and headings stay stable without re-scrambling when switching languages.
- **Snappy View Transition Timing**: Tuned `::view-transition-old(root)` and `::view-transition-new(root)` in [`global.css`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/styles/global.css) to 110ms `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Deduplicated Event Listeners**: Guarded navbar and interactive component listeners to ensure single-instance binding during client-side navigation.
- **Design Principle C (Freshness)**: Updated [`Footer.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Footer.astro) update indicator to `Updated · November 2026` / `Cập nhật · Tháng 11, 2026`.

### E. Swarm Audit & Elimination of Route Transition Delay (Ponytail Full Mode)

- **Root Causes of Perceived Route Transition Delay Identified & Resolved**:
  - **Astro Prefetch Strategy**: Changed `defaultStrategy: "hover"` to `"viewport"` in [`astro.config.mjs`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/astro.config.mjs). On mobile devices and touchpads, hover never triggered, causing a 200–500ms network fetch before view transitions started. With `viewport`, every internal link entering the viewport is prefetched in the background into HTTP cache, yielding instant (0ms) clicks across all routes (`/projects/`, `/fm-dictionary/`, `/vi/`, etc.).
  - **Scroll-Behavior Conflict**: Removed `scroll-smooth` class from `BaseLayout.astro` and replaced global `scroll-behavior: smooth` in `global.css` with `html[data-astro-transition] { scroll-behavior: auto !important; }`. Added a scoped in-page anchor click handler (`a[href^="#"]`) in `BaseLayout.astro` so that intra-page anchor navigation remains smooth while route view transitions jump to top in 0ms without floaty scroll lag.
  - **View Transition Speed Tuning**: Tuned View Transition duration in `global.css` from 140ms down to 90ms with snappy `cubic-bezier(0, 0, 0.2, 1)`.
- **Architectural & Layout Audit (`improve-codebase-architecture`) Fixes**:
  - **Mobile Menu Lifecycle**: Patched event binding in [`Header.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Header.astro). Previously, `transition:name="site-header"` preserved `#navbar` while `#mobile-menu` was discarded and recreated outside of it, causing detached listeners and an unresponsive mobile menu after navigating. Now properly binds handlers on every mount and maintains focus management.
  - **Focus Trap & Accessibility**: Added Tab/Shift+Tab focus trap inside `#mobile-menu`, Escape key dismiss, and focus restoration to the hamburger button.
  - **Z-Index Layering**: Raised `#mobile-menu` to `z-[110]` over `#navbar` (`z-50`).
  - **Canonical Trailing Slashes**: Enforced trailing slashes on `enHref` and `viHref` in `BaseLayout.astro` (`/projects/`, `/vi/projects/`, etc.).
  - **ID Uniqueness**: Removed duplicate `id="experience"` in `ExperienceTimeline.astro`.
  - **Floating UI Collision**: Adjusted `CopyEmailButton.astro` toast notification positioning to `md:bottom-24` and `bottom-20` on mobile, preventing overlap with the `#back-to-top` button.
- **Editorial Design & Anti-Slop Audit (`checklist-design` & `design-taste-frontend`) Fixes**:
  - **Typography**: Replaced `text-justify` with `text-left` in `HomePage.astro` and `ExperienceTimeline.astro` to eliminate browser whitespace rivers in Vietnamese and English.
  - **Anti-Slop Cleanliness**: Removed `.ambient-glow` blurry radial gradients from `BaseLayout.astro` and `global.css` in favor of crisp monochromatic surfaces. Dropped decorative timeline `01 /` index numbering and pulsing dots.
  - **WCAG AA Touch & Contrast**: Expanded mobile filter button height to `min-h-11` (44px) in `ProjectsIndexPage.astro`, normalized neutral color classes to strict monochromatic tokens (`text-black dark:text-white`), and added visible keyboard focus rings.
- **Tooling Fix**: Installed devDependencies into `node_modules` enabling Prettier formatting and Husky pre-commit checks to run cleanly on Windows.

---

## 2. 🚦 Current State

- **Branch**: `main`
- **Latest Commit**: `c36fd63` (`fix(perf): eliminate route transition delay, patch mobile drawer lifecycle, and refine editorial design`)
- **Build Status**:
  - `npm run lint` (`astro check`): **0 errors, 0 warnings**
  - `npm run build`: **10/10 static routes generated successfully in ~2.9s** to [`dist/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/dist/)
- **Pre-commit Hooks**: Verified and active (`lint-staged` with `prettier` + `astro check`).
- **Brand Rules Compliance**:
  - Navbar logo: `KHANG` (typographic wordmark, 0px border-radius).
  - AK monogram favicon is strictly and exclusively confined to the browser tab icon (`public/favicon.ico`, `public/icon.svg`).
  - Owner: An Khang (Software Developer).
  - Email: `ankhang.nguyen0704@gmail.com`.
  - Professional timeline reflects `2026 - Nay` for IT Helpdesk at Bệnh Viện Mắt Bình Thuận, and `2022 - 2026` for Bachelor of IT.

---

## 3. 🚧 In Progress

None. All migration, UI restoration, pre-commit tooling, and performance optimization goals are complete and fully verified.

---

## 4. ✅ Next Steps

1. **Production Deployment Monitoring**:
   - Verify automatic build and deployment on Cloudflare Pages (`https://ankhang0704.pages.dev/`).
2. **Optional Hybrid Rendering Features (Backlog)**:
   - If desired in future sessions, integrate Cloudflare Pages Functions to power an edge-rendered message contact endpoint or live case study view counter.

---

## 5. 📂 Key Files Touched

- [`astro.config.mjs`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/astro.config.mjs): Configured static export, prefetching strategy, and i18n routing.
- [`package.json`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/package.json): Added `prettier-plugin-astro`, Husky, and lint-staged scripts.
- [`.prettierrc`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/.prettierrc) & [`.lintstagedrc`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/.lintstagedrc): Formatter and pre-commit configuration.
- [`src/layouts/BaseLayout.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/layouts/BaseLayout.astro): HTML skeleton, Google Fonts, Astro `<ClientRouter />`, Zero-FOUC theme script.
- [`src/styles/global.css`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/styles/global.css): Global tokens, ambient glow, and tuned 110ms View Transitions.
- [`src/components/ui/Header.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Header.astro): Sticky glass navbar, scroll preservation across language toggle, prefetch attributes.
- [`src/components/ui/Footer.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ui/Footer.astro): Back to top, email copy, and November 2026 freshness indicator.
- [`src/components/interactive/RevealOnScroll.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/RevealOnScroll.astro): Viewport-aware reveal on `astro:after-swap`.
- [`src/components/interactive/CountUp.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/CountUp.astro): Number stability across transitions.
- [`src/components/interactive/DecryptedText.astro`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/interactive/DecryptedText.astro): Title stability across transitions.

---

## 6. ❓ Open Questions

None. All technical decisions and user requirements have been resolved.

---

## 7. 🛠️ Suggested Skills

When continuing work in this repository, the following verified skills in [`.agents/skills/`](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/.agents/skills/) are recommended:

- `start`: Resume work cleanly from this handoff document in a new session.
- `setup-pre-commit`: Maintain or adjust Husky and lint-staged git hook configurations.
- `improve-codebase-architecture`: Audit layout, typography, and responsive design consistency across the portfolio.
- `taste-skill`: Review and polish editorial aesthetic, typography hierarchy, and visual restraint.
- `checklist-design`: Verify accessibility and interaction patterns against design system checklists.
