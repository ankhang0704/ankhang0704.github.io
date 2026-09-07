# Project Agent Context: Portfolio & FM Dictionary

This document provides the operational policy and context for AI agents working on this project. It serves as the "source of truth" for coding standards, branding, and project-specific knowledge.

## 🎯 Project Overview
- **Type:** Personal Software Engineering Portfolio & Product Landing Page.
- **Projects:**
    - **Main Portfolio:** Highlighting An Khang's transition from IT Support to Backend (Django) and Mobile (Flutter) development.
    - **FM Dictionary:** A premium vocabulary app helping the Facilities Management community and anyone interested in the field master 1,847 specialized FM terms — built with Flutter for iOS & Android.

## 🛠 Tech Stack
- **Frontend:** Next.js App Router, React, TypeScript, and Tailwind CSS compiled through the project build.
- **Icons:** Tabler Icons via `@tabler/icons-react`.
- **Animations:** GSAP with `@gsap/react` and ScrollTrigger.
- **Styling:** Minimalist, Editorial-style, Dark/Light Mode support.
- **Logic:** React client components and TypeScript for theme toggling, bilingual support, interactions, and scroll effects.

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
- **Bilingual System (App Router i18n):**
    - Uses the native Next.js App Router `[lang]` segment. English is exposed through locale-free canonical URLs and Vietnamese through `/vi/` paths.
    - Dictionaries located in `src/dictionaries/en.json` and `src/dictionaries/vi.json`.
    - Pages render dynamic `<html lang="en">` or `<html lang="vi">` tags directly from the server.
    - Default locale is English (`en`). Root and unprefixed URLs are internally rewritten to English while `/en/*` redirects to the locale-free canonical path.
- **Routing & Deployment:**
    - **Internal Links & Assets:** Use Next.js `Link` with `localizedPath` for internal routes and root-relative paths for public assets (e.g., `/my_cv.pdf`).
    - **Trailing Slashes:** Directory links must end with a trailing slash (e.g., `href="/fm-dictionary/"`).
    - **Vercel Config:** `vercel.json` must have `"trailingSlash": true` and `"cleanUrls": true` enabled.
- **Styling Rules:**
    - **Design System & Constraints:** See [docs/design/DESIGN.md](./docs/design/DESIGN.md) for complete guidelines on typography, colors, and motion.
    - Maintain "Ambient Glow" effect in all main sections.
    - Use `font-serif italic` (Playfair Display) for sophisticated emphasis.
    - **Font Sizing:** Use the responsive, role-based typography scale defined in `docs/design/DESIGN.md`; hero headers may reach `md:text-8xl` when the content and viewport allow it.
    - Icons must be monochromatic (`text-black dark:text-white`) and use Tabler Icons (no emojis).
    - Footer visibility: Ownership and copyright text must be `opacity-80` and `font-medium` for readability.

## 🧪 Verification
- All changes must be verified for:
    1. Dark/Light mode consistency.
    2. Bilingual toggle functionality.
    3. Mobile responsiveness (Tailwind grid/flex).
    4. Mobile Menu (Hamburger) functionality and overlay links.
    5. GSAP/ScrollTrigger animation performance.

---
*Operational configuration is managed in the [./.agents/](./.agents/) directory.*
