# Design Language Specification: Portfolio & FM Dictionary

## Executive Summary

This document serves as the permanent source of truth for the design language of An Khang's Portfolio and the FM Dictionary project. The design is a highly intentional, minimalist, and editorial-style system that relies on monochromatic contrast, expansive typography, and structural negative space rather than decorative UI elements. Future development must align with the constraints and principles outlined below. Redesigning or modernizing towards common SaaS aesthetics is strictly prohibited.

---

## 1. Design Philosophy

The design philosophy is **Minimalist, Editorial, and Architectural**.

- **Overall Feeling:** Calm, premium, confident, and sophisticated.
- **Personality:** Like an art gallery or a high-end editorial magazine.
- **Emotional Tone:** Professional yet artistic, focusing on clarity without being sterile.
- **Visual Identity:** High contrast (black and white), large dramatic typography, sharp edges, and subtle, ambient atmospheric effects.
- **Intended First Impression:** "Wow" through restraint. The user should feel they are looking at the work of someone who understands structure, detail, and aesthetics deeply.

_Why:_ The portfolio avoids standard SaaS UI (like heavy drop shadows, rounded corners, or bright primary colors) to emphasize the content and the creator's structural thinking.

---

## 2. Design Principles

- **Strong Typography:** Type is treated as the primary UI element, doing the heavy lifting for visual hierarchy.
- **Negative Space:** Generous responsive padding and margins create a breathable, unhurried reading experience. The hero fills the viewport gracefully, while content sections use larger responsive vertical spacing without requiring a fixed height.
- **Geometric Layout:** Sharp corners and clean grid alignments form a solid architectural foundation.
- **Low Decoration:** Borders are kept to a whisper (1px, low opacity).
- **Restrained Color:** Monochrome-first (black/white/grays) based on the current theme, with restrained semantic colors reserved for meaningful states such as errors or success.
- **Visual Rhythm:** Structured sectioning creates a deliberate, paced journey. Scroll snapping is reserved for focused horizontal galleries or carousels where it improves navigation.

---

## 3. Visual DNA

The recognizable characteristics of this portfolio:

- **Navbar:** When scrolled, use a translucent blur (`backdrop-filter: blur(20px)`) with ultra-minimal, uppercase, wide-tracked text. The top-of-page state remains visually lighter.
- **Header/Hero Composition:** Massive typography (`md:text-8xl`), mixing stark geometric sans-serif with elegant serif italics.
- **Project Cards:** Asymmetrical grid split (7/5), featuring a large 16/10 image with a sharp viewport header and high-contrast metadata badges.
- **Buttons:** Sharp, transparent outlines with uppercase, wide-tracking text that inverts on hover (`border border-black dark:border-white`).
- **Tags & Status Badges:** Tiny (`text-[10px]`), heavily tracked uppercase text with thin, low-opacity borders.
- **Lines & Accents:** Short, 1px horizontal lines (`h-[1px] w-8` or `w-12`) used as section anchors or terminal metadata dividers.
- **Decorative Backgrounds:** Highly blurred `ambient-glow` elements (100px blur) and responsive `GridPattern` provide the atmospheric blueprint layer.

---

## 4. Border Radius System

The system aggressively avoids rounded corners for UI elements to maintain an architectural feel.

- **Navbar:** 0px
- **Buttons:** 0px
- **Cards (Images & Containers):** 0px
- **Tags & Chips:** 0px
- **Timeline Dots:** 50% (Circles)
- **Optional Decorative Images:** If introduced, use massive, dramatic rounding on a single corner (e.g., `rounded-tr-full`, `rounded-l-full`, `rounded-br-full`) while keeping foreground UI sharp.
- **Ambient Glows:** 50% (Circles heavily blurred)

_Why:_ Sharp corners convey precision, engineering discipline, and editorial maturity. The only rounded elements are purely decorative background layers, creating a soft backdrop against the strict foreground grid.

---

## 5. Spacing System

- **Container Width:** `container mx-auto px-6 md:px-8` (Max-width approach with standard padding).
- **Section Spacing:** Generous responsive spacing, typically `py-24 md:py-32` or `pt-32 pb-24`, avoiding rigid viewport clamping.
- **Grid:** 12-column foundation (`lg:grid-cols-12` used in projects and the skills bento), with responsive spans such as `7/5/12`; smaller feature groups use 3 or 4 columns where content supports it.
- **Vertical Rhythm:** Large margins below headings (`mb-12`, `mb-16`), generous spacing between paragraphs (`mb-6`).
- **Whitespace Philosophy:** Whitespace is not empty space; it is an active architectural element framing content.

---

## 6. Typography System

Three font families orchestrate the identity:

- **Base/Body (Sans):** _Inter_ (`font-sans`). Used for body text, tags, and UI elements. Body copy follows a responsive role-based scale: usually `text-base sm:text-lg`, with `text-xl` reserved for lead copy. Light weight (`font-light`), relaxed line height, and a readable measure such as `max-w-[65ch]`.
- **Headings (Display):** _Space Grotesk_ (`font-display`). Used for primary impact. Bold weight (`font-bold`), with responsive sizes ranging from `text-3xl`/`text-4xl` to `md:text-8xl`/`md:text-9xl` based on hierarchy.
- **Emphasis (Serif):** _Playfair Display_ (`font-serif`). Used exclusively in italic for sophisticated, artistic emphasis.
- **Metadata/Tags/Terminal:** Extreme letter spacing (`tracking-widest` or `tracking-[0.3em]`), uppercase, monospace (`font-mono`) or sans (`text-xs` / `text-[10px]`).
- **Localization Rule:** Type must remain readable when Vietnamese translations wrap. Never force essential content into clipping or `whitespace-nowrap`.

---

## 7. Color System

The palette is monochrome-first across both themes. Black, white, and grays define the brand surface.

- **Light Theme:** Background (`#fafafa`), Text (`#111111`), Cards (`#ffffff`).
- **Dark Theme:** Background (`#0a0a0a`), Text (`#ededed`), Cards (`#121212`).
- **Hierarchy via Opacity:** Instead of lighter grays, hierarchy is established via opacity (e.g., `opacity-80` for body text, `opacity-50` for metadata, `black/10` or `white/10` for borders).
- **Gradients:** Radial transparent gradients are used exclusively for ambient atmospheric glows.
- **Semantic Colors:** Error, warning, and success states use restrained, accessible colors paired with text or icons.

---

## 8. Shadow System

- **Usage:** Shadows are intentionally **NON-EXISTENT** on UI elements.
- **Philosophy:** No drop shadows on cards, buttons, or navbars. Depth is achieved through the Z-axis (blur effects, fixed background layers, spotlight cards) and contrast (1px borders).

---

## 9. Motion Language & Micro-Interactions (React Bits)

Third-party animation runtimes (such as GSAP) have been completely removed for maximum runtime performance, zero bundle bloat, and instant 0ms hydration. All animations run either on pure CSS keyframes or lightweight native browser APIs (`requestAnimationFrame`, native `IntersectionObserver`):

- **Native Viewport Triggers (`RevealOnScroll`):** Uses native `IntersectionObserver` with hardware-accelerated CSS `transform` and `opacity` transitions.
- **Scramble Text Decode (`DecryptedText`):** Provides a tactile cybernetic text unscramble on badges and headers without external libraries.
- **Dynamic Spotlight Cards (`SpotlightCard`):** Radial cursor spotlight highlighting architectural borders and backgrounds on mouse move.
- **Perspective Tilt (`TiltedCard`):** 3D perspective tilt (5° max) with specular reflection on project cards.
- **Magnetic Buttons (`MagneticButton`):** Subtle spring attraction (0.15 strength) on primary action buttons.
- **Editorial Text Blur (`BlurText`):** Staggered reveal transitioning from Gaussian blur to sharp typography.
- **Proficiency Marquee (`TechMarquee`):** Continuous hardware-accelerated ticker with hover-pause.
- **Numeric Counter (`CountUp`):** 60fps numeric counter using `easeOutExpo` easing.
- **Reduced Motion Invariant:** Every micro-interaction strictly respects `prefers-reduced-motion: reduce`, instantly presenting clean, non-animated typography and layouts.

---

## 10. Iconography

- **Family:** Tabler Icons via `@tabler/icons-react`.
- **Style:** Clean outline icons with consistent geometry and a `strokeWidth` around `1.5`–`2`.
- **Color:** Monochrome-first using `currentColor` or theme classes (`text-black dark:text-white`).
- **Accessibility:** Decorative icons use `aria-hidden="true"`; interactive icon buttons must have an accessible label.
- **Rule:** NO emojis. Icons should feel structural, technical, and visually quiet.

---

## 11. Component Language

### Project Cards

- _Visuals:_ Sharp 0px corners, 16/10 aspect ratio image (grayscale by default, color on hover), precision header with project code (`PRJ-01`) and status chip, and clean metadata actions.

### Outline Buttons

- _Visuals:_ `border border-black dark:border-white`, sharp corners (0px radius), wide-tracked uppercase text, magnetic attraction, and color inversion on hover.

### Error & 404 Pages

- _Purpose:_ Graceful, high-recovery route fallback.
- _Architecture:_ Rendered strictly as a content component within `RootLayout` (never outputting nested `<html>` or `<body>` tags) to guarantee 100% hydration integrity and unbroken React Router event handlers.
- _Visuals:_ Centered architectural composition with `GridPattern`, high-impact Space Grotesk display number (`404.`), monospace status badge (`ERROR 404 // ROUTE_NOT_FOUND` with `DecryptedText`), and dual recovery paths (`Return to terminal` and `Explore selected work`).
- _Coherence:_ Fully integrated with global `Header`, `Footer`, `ThemeContext` (Dark/Light mode), and `LanguageContext` (Bilingual EN/VI).

---

## 12. Bilingual Architecture (Zero-Latency Client-Side)

- **Engine:** `LanguageContext` located at `src/context/LanguageContext.tsx` built on React 19 `useSyncExternalStore` + `localStorage` + `user_lang_change` window event.
- **Behavior:** Toggles instantly in **0ms** without page reloads, network fetches, or URL alteration.
- **Routing:** English and Vietnamese are served directly on canonical URLs (`/`, `/projects/`, `/fm-dictionary/`, `/github-vault-relay/`, `/hotel-management/`).
- **Edge 301 Redirects:** Legacy `/vi/*` routes are redirected natively at the Cloudflare Pages edge via `public/_redirects` to maintain backwards compatibility with external links and bookmarks.

---

## 13. Pre-Commit Quality & Verification Protocol

All changes must pass automated and manual verification:

1. **Pre-Commit Hooks:** Powered by Husky v9 + lint-staged + Prettier + `npm run typecheck` (`tsc --noEmit`). Every staged commit is automatically formatted and type-checked before entering Git history.
2. **Linter:** `npm run lint` must yield 0 errors and 0 warnings.
3. **Static Build:** `npm run build` must export 100% cleanly to `out/` with zero missing chunks or broken routes.
4. **HTML Validity:** Ensure zero nested `<html>` or `<body>` tags in pre-rendered static artifacts.
5. **A11y:** Full keyboard navigation, visible focus indicators, and WCAG AA contrast compliance across both light and dark modes.

---

## 14. Document Precedence

When project rules conflict, apply this order:

1. User requirements, accessibility, legal, security, and runtime correctness.
2. [`AGENTS.md`](../../AGENTS.md) for project-wide operational, branding, routing, and verification rules.
3. `DESIGN.md` for visual language, design tokens, layout hierarchy, and component specifications.
4. Advisory skills (e.g. `.agents/skills/taste-skill/SKILL.md`) for general heuristics.
