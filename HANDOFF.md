# Project Handoff: Portfolio & FM Dictionary (September 2026)

This document provides complete operational, architectural, and design context for subsequent agents taking over this project.

---

## 🎯 Project State & Overview

- **Owner:** An Khang (Software Developer / IT Operations).
- **Core Domain:** Personal Engineering Portfolio & FM Dictionary Landing Page.
- **Current Production Year:** `2026` (Reflecting real milestones: IT Helpdesk @ Bệnh Viện Mắt Bình Thuận, SOJO Company Intern, Capstone Defense & Graduation).
- **Next.js & SSG:** Next.js 16.2.6 (App Router) with full static generation (`21/21 static routes` compiled via `npm run build`).
- **Design System:** Monochromatic dual theme (pure black `#0a0a0a` / pure white `#fafafa`), strict 0px border-radius geometry (`DESIGN.md`), and bespoke typography pairing (`Space Grotesk` + `Playfair Display Italic` + `Inter`).

---

## 🚀 Key Accomplishments in This Session

1. **Architectural Hybrid Timeline (`src/components/home/TimelineInteractiveView.tsx`)**:
   - Merged the vertical timeline axis & square 0px node markers with the 2-column minimalist ledger layout.
   - 4 synchronized chronological milestones (04/2026—Present IT Helpdesk, 01/2026—04/2026 SOJO Company, 03/2026 Graduation, 2022—2026 Bachelor of IT).
   - Real-time GSAP scrub active line tracking.

2. **Selected Works: Blueprint Spec Sheet Layout (`src/components/home/ProjectsInteractiveView.tsx`)**:
   - Industrial engineering spec sheet design with metadata header bar (`[ PRJ-01 ] [ LIVE PRODUCTION ] [ PUBLISHED ]`).
   - 3-point structured impact table (**PROBLEM** → **SOLVE** → **RESULT**).
   - Direct integration with Bento Tech Badge interactive scroller/highlighter.

3. **Summary Section: Architectural Editorial Spread (`src/components/home/SummaryInteractiveView.tsx`)**:
   - Replaced boxed and redundant text elements with an authoritative 12-column Editorial Spread.
   - Left Column (Span 4): Career Positioning Index & Anchors (`Bệnh Viện Mắt Bình Thuận`, `Cử Nhân CNTT`, `FM Dictionary`).
   - Right Column (Span 8): Prominent Lead Statement in Space Grotesk + Playfair Display Italic + 2-paragraph narrative flow.

4. **Global Typography Scale-Up & Readability**:
   - Synchronized all body copy to `text-xl`/`text-2xl` and display headers to `text-4xl`–`text-6xl` for superior legibility.

5. **Comprehensive 60 FPS Performance Optimization**:
   - Promoted `.ambient-glow` to GPU composite layers (`transform: translate3d(0, 0, 0); will-change: transform; contain: strict; backface-visibility: hidden;`).
   - Added `will-change: transform, opacity;` to all GSAP ScrollTrigger targets.
   - Guarded scroll event listeners in `Header.tsx` with ref flags and `{ passive: true }`.

---

## 🗂️ Key Architectural Files

- **`src/app/[lang]/page.tsx`**: Main landing page composing Header, Hero, Summary, Skills Bento Matrix, Selected Works, Timeline, and Footer.
- **`src/components/home/SummaryInteractiveView.tsx`**: Editorial Spread component for Summary.
- **`src/components/home/ProjectsInteractiveView.tsx`**: Blueprint Spec Sheet component for Selected Works.
- **`src/components/home/TimelineInteractiveView.tsx`**: Ledger timeline component with vertical GSAP scrub line.
- **`src/components/home/TechBadgeButton.tsx`**: Interactive bridge between Bento Skills and Project Cards.
- **`src/components/Header.tsx`**: Scroll-preserving bilingual switcher, reading progress bar, theme switcher.
- **`src/components/Footer.tsx`**: 1-click email copy button with floating toast and auto-freshness date stamp.
- **`src/app/style.css`**: Global GPU layer optimizations, glassmorphism, and GSAP hardware acceleration styles.

---

## 🛠️ Suggested Skills for Next Agent

1. **`gsap-performance`**: For ensuring all GSAP animations maintain 60 FPS on mobile and low-powered devices.
2. **`improve-codebase-architecture`**: For auditing landing page layout, responsive design, and CSS containment.
3. **`gsap-core`** & **`gsap-scrolltrigger`**: For any further scroll-driven interactions.

---

## 🧪 Verification Commands

```bash
# Verify TypeScript & ESLint (must pass with 0 errors)
npm run lint

# Verify full static site generation (21/21 routes)
npm run build
```
