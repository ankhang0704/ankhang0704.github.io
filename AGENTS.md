# Project Agent Context: Portfolio & FM Dictionary

This document provides the operational policy and context for AI agents working on this project. It serves as the "source of truth" for coding standards, branding, and project-specific knowledge.

## 🎯 Project Overview
- **Type:** Personal Software Engineering Portfolio & Product Landing Page.
- **Projects:**
    - **Main Portfolio:** Highlighting An Khang's transition from IT Support to Backend (Django) and Mobile (Flutter) development.
    - **FM Dictionary:** A premium vocabulary app helping the Facilities Management community and anyone interested in the field master 1,800+ specialized FM terms — built with Flutter for iOS & Android.

## 🛠 Tech Stack
- **Frontend:** HTML5, Tailwind CSS (via CDN), Font Awesome 6.4.0.
- **Animations:** AOS (Animate On Scroll).
- **Styling:** Minimalist, Editorial-style, Dark/Light Mode support.
- **Logic:** Vanilla JavaScript for theme toggling, bilingual support, and scroll effects.

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
- **Bilingual System:**
    - Uses `data-vi` and `data-en` attributes.
    - Script logic in `script.js` toggles visibility and innerHTML based on selected language.
    - Both the Main Portfolio and FM Dictionary default to English (`en`).
- **Routing & Deployment:**
    - **Root-Relative Paths:** Use absolute paths from root (e.g., `/style.css`, `/fm-dictionary/privacy-policy.html`) for all internal links, assets, and scripts to ensure compatibility across subdirectories.
    - **Trailing Slashes:** Directory links must end with a trailing slash (e.g., `href="/fm-dictionary/"`).
    - **Vercel Config:** `vercel.json` must have `"trailingSlash": true` and `"cleanUrls": true` enabled.
- **Styling Rules:**
    - Maintain "Ambient Glow" effect in all main sections.
    - Use `font-serif italic` (Playfair Display) for sophisticated emphasis.
    - **Font Sizing:** Synchronize all primary page content to `text-xl` and hero headers to `md:text-8xl` for consistency across Portfolio and FM Dictionary pages.
    - Icons must be monochromatic (`text-black dark:text-white`) and use Font Awesome 6 classes (no emojis).
    - Footer visibility: Ownership and copyright text must be `opacity-80` and `font-medium` for readability.

## 🧪 Verification
- All changes must be verified for:
    1. Dark/Light mode consistency.
    2. Bilingual toggle functionality.
    3. Mobile responsiveness (Tailwind grid/flex).
    4. Mobile Menu (Hamburger) functionality and overlay links.
    5. AOS animation performance.

---
*Operational configuration is managed in the [./.agents/](./.agents/) directory.*
