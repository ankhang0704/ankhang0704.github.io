# Project Agent Context: Portfolio & FM Dictionary

This document provides the operational policy and context for AI agents working on this project. It serves as the "source of truth" for coding standards, branding, and project-specific knowledge.

## 🎯 Project Overview

- **Type:** Personal Software Engineering Portfolio & Product Landing Page.
- **Projects:**
  - **Main Portfolio:** Highlighting An Khang's transition from IT Support to Backend (Django) and Mobile (Flutter) development.
  - **FM Dictionary:** A premium vocabulary app helping the Facilities Management community and anyone interested in the field master 1,847 specialized FM terms — built with Flutter (v1.1.4) for iOS & Android.

## 🛠 Tech Stack & Architecture (Static Export & Zero-Latency)

- **Frontend Engine:** Astro 5 (Static HTML Export `output: "static"`), TypeScript 5, Tailwind CSS. Zero UI runtime (100% React-free static compilation).
- **Delivery Model:** 100% Static HTML/CSS/JS export (`dist/` directory), deployed natively to Cloudflare Pages (`https://ankhang0704.pages.dev/`) with zero serverless cold starts and zero edge middleware latency.
- **Bilingual System:** Native Astro i18n routing (`/` for EN, `/vi/` for VI) with Astro 5 `<ClientRouter />` (View Transitions) for 0ms client-side page transitions.
- **Icons:** Monochromatic inline vector SVGs.
- **Animations:** Native GPU-accelerated viewport triggers (`IntersectionObserver`), Pure CSS `@keyframes` marquee, and zero runtime animation dependencies (GSAP/React removed for maximum performance).
- **Styling:** Minimalist editorial aesthetic, Dark/Light Mode support via zero-FOUC inline `<head>` script.

## 📏 Standards & Rules

- **Branding:**
  - Navbar Logo: `KHANG`
  - Portfolio Owner: `An Khang` (Software Developer).
  - Email: `ankhang.nguyen0704@gmail.com`
- **Current State (2026):**
  - All years should reflect `2026`.
  - Professional Timeline includes:
    - `2026 - Nay`: IT Helpdesk at Bệnh Viện Mắt Bình Thuận.
    - `2022 - 2026`: Bachelor of Information Technology.
- **Routing & Deployment:**
  - **Static Output:** `astro.config.mjs` uses `output: "static"` building to `dist/`.
  - **Canonical Routes:** `/`, `/projects/`, `/fm-dictionary/`, `/github-vault-relay/`, `/hotel-management/` (and `/vi/*` equivalents).
  - **Edge Redirects:** Handled via `public/_redirects` (for Cloudflare Pages) and `404.html` (for GitHub Pages redirection).
- **Styling Rules:**
  - Cohesive 2-font system: `Space Grotesk` (display) + `Inter` (body).
  - Monochromatic palette (`text-black dark:text-white`).
  - 0px border-radius architectural geometry.

## 🧪 Verification

- All changes must pass:
  1. `npm run lint`: 0 errors, 0 warnings.
  2. `npm run build`: 100% successful static export to `out/`.
  3. Instant 0ms language toggle in both desktop and mobile headers.
  4. Dark/Light mode synchronization without hydration mismatch.

---

_Operational configuration is managed in the [./.agents/](./.agents/) directory._
