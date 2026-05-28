# Project Agent Context: Portfolio & FM Dictionary

This document provides the operational policy and context for AI agents working on this project. It serves as the "source of truth" for coding standards, branding, and project-specific knowledge.

## 🎯 Project Overview
- **Type:** Personal Software Engineering Portfolio & Product Landing Page.
- **Projects:**
    - **Main Portfolio:** Highlighting An Khang's transition from IT Support to Backend (Django) and Mobile (Flutter) development.
    - **FM Dictionary:** A specialized mobile dictionary app (commissioned by Thuy Ta, developed by An Khang Studio).

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
    - FM Dictionary defaults to English (`en`).
- **Styling Rules:**
    - Maintain "Ambient Glow" effect in all main sections.
    - Use `font-serif italic` (Playfair Display) for sophisticated emphasis.
    - Icons must be monochromatic (`text-black dark:text-white`) and use Font Awesome 6 classes (no emojis).
    - Footer visibility: Ownership and copyright text must be `opacity-80` and `font-medium` for readability.

## 🧪 Verification
- All changes must be verified for:
    1. Dark/Light mode consistency.
    2. Bilingual toggle functionality.
    3. Mobile responsiveness (Tailwind grid/flex).
    4. AOS animation performance.

---
*Operational configuration is managed in the [./.agents/](./.agents/) directory.*
