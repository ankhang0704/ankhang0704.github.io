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

*Why:* The portfolio avoids standard SaaS UI (like heavy drop shadows, rounded corners, or bright primary colors) to emphasize the content and the creator's structural thinking. 

---

## 2. Design Principles
- **Strong Typography:** Type is treated as the primary UI element, doing the heavy lifting for visual hierarchy.
- **Negative Space:** Generous responsive padding and margins create a breathable, unhurried reading experience. The hero may fill the viewport, while content sections use larger responsive vertical spacing without requiring a fixed height.
- **Geometric Layout:** Sharp corners and clean grid alignments form a solid architectural foundation.
- **Low Decoration:** Borders are kept to a whisper (1px, low opacity). 
- **Restrained Color:** Monochrome-first (black/white/grays) based on the current theme, with restrained semantic colors reserved for meaningful states such as errors or success.
- **Visual Rhythm:** Structured sectioning creates a deliberate, paced journey. Scroll snapping is reserved for focused horizontal galleries or carousels where it improves navigation.

---

## 3. Visual DNA
The recognizable characteristics of this portfolio:
- **Navbar:** When scrolled, use a translucent blur (`backdrop-filter: blur(20px)`) with ultra-minimal, uppercase, wide-tracked text. The top-of-page state may remain visually lighter.
- **Header/Hero Composition:** Massive typography (`md:text-8xl`), mixing stark geometric sans-serif with elegant serif italics.
- **Project Cards:** Asymmetrical grid split (7/5), featuring a large 16/10 image with a huge, subtle blend-mode difference number overlay.
- **Buttons:** Sharp, transparent outlines with uppercase, wide-tracking text that inverts on hover.
- **Tags:** Tiny (`text-[10px]`), heavily tracked uppercase text with thin, low-opacity borders.
- **Lines & Accents:** Short, 1px horizontal lines (`h-[1px] w-12`) used as section or metadata anchors.
- **Decorative Backgrounds:** Highly blurred `ambient-glow` elements (100px blur) provide the atmospheric layer. Additional grayscale background images are optional and must not compete with the content grid.

---

## 4. Border Radius System
The system aggressively avoids rounded corners for UI elements to maintain an architectural feel.
- **Navbar:** 0px
- **Buttons:** 0px
- **Cards (Images & Containers):** 0px
- **Tags:** 0px
- **Timeline Dots:** 50% (Circles)
- **Optional Decorative Images:** If introduced, use massive, dramatic rounding on a single corner (e.g., `rounded-tr-full`, `rounded-l-full`, `rounded-br-full`) while keeping foreground UI sharp.
- **Ambient Glows:** 50% (Circles heavily blurred)

*Why:* Sharp corners convey precision, engineering, and editorial maturity. The only rounded elements are purely decorative background layers, creating a soft backdrop against the strict foreground grid.

---

## 5. Spacing System
- **Container Width:** `container mx-auto px-6 md:px-8` (Max-width approach with standard padding).
- **Section Spacing:** The hero uses a viewport-based minimum height when appropriate. Content sections use generous responsive spacing, typically `py-32 md:py-40`, without forcing every section to share the same height.
- **Grid:** 12-column foundation (`lg:grid-cols-12` used in projects and the skills bento), with responsive spans such as `7/5/12`; smaller feature groups may use 3 or 4 columns where content supports it.
- **Vertical Rhythm:** Large margins below headings (`mb-16`, `mb-20`), generous spacing between paragraphs (`mb-6`).
- **Whitespace Philosophy:** Whitespace is not empty space; it is an active design element used to frame content.

---

## 6. Typography System
Three font families orchestrate the identity:
- **Base/Body (Sans):** *Inter* (`font-sans`). Used for body text, tags, and UI elements. Body copy follows a responsive role-based scale rather than one fixed size: usually `text-base sm:text-lg`, with `text-xl` or larger reserved for lead copy and long-form reading. Use a light weight (`font-light`), relaxed line height, and a readable measure such as `max-w-[65ch]`.
- **Headings (Display):** *Space Grotesk* (`font-display`). Used for primary impact. Bold weight (`font-bold`), with responsive sizes ranging from `text-3xl`/`text-4xl` to `md:text-8xl` based on hierarchy and available width.
- **Emphasis (Serif):** *Playfair Display* (`font-serif`). Used exclusively in italic for sophisticated, artistic emphasis. Sizes range responsively from `text-5xl` to `md:text-9xl`.
- **Metadata/Tags:** Extreme letter spacing (`tracking-widest` or `tracking-[0.2em]`), uppercase, usually `text-xs` or `text-[10px]`.
- **Localization Rule:** Type must remain readable when Vietnamese or other longer translations wrap. Never preserve a visual line break by clipping or forcing essential content into `whitespace-nowrap`.

---

## 7. Color System
The palette is monochrome-first across both themes. Black, white, and grays define the brand surface; restrained semantic colors are allowed when they communicate state or validation.
- **Light Theme:** Background (`#fafafa`), Text (`#111111`), Cards (`#ffffff`).
- **Dark Theme:** Background (`#0a0a0a`), Text (`#ededed`), Cards (`#121212`).
- **Hierarchy via Opacity:** Instead of lighter grays, hierarchy is established via opacity (e.g., `opacity-80` for body text, `opacity-50` for metadata, `black/10` for borders).
- **Gradients:** Radial transparent gradients are used for ambient glows. Functional gradients are also allowed when they preserve legibility over imagery, such as a subtle caption overlay.
- **Semantic Colors:** Error, warning, success, and informational states may use accessible colors as a secondary signal. Every state must also have text, an icon, or another non-color indicator, and must meet the required contrast.
- **Highlight Colors:** No decorative accent colors. Brand highlights remain monochrome; semantic exceptions are contextual rather than part of the visual identity.

---

## 8. Shadow System
- **Usage:** Shadows are intentionally **NON-EXISTENT** on UI elements.
- **Philosophy:** No drop shadows on cards, buttons, or navbars. Depth is achieved through the Z-axis (blur effects, fixed background layers, parallax/scroll reveals) and contrast (1px borders).

---

## 9. Motion Language
- **Scroll Animations:** Controlled via GSAP and ScrollTrigger. Use restrained `fade-up`, `fade-right`, and `fade-left`-style reveals with timelines, scrubbed progress, and reduced-motion fallbacks where appropriate.
- **Duration & Easing:** Deliberate but responsive durations, generally around `500–900ms`, using GSAP `power2.out`/`power3.out` or an equivalent ease.
- **Hover Behaviors:** 
  - *Underlines:* Expand from `scaleX(0)` to `scaleX(1)`.
  - *Buttons:* Solid color invert (transparent to solid black/white).
  - *Images:* Scale down slightly (`scale-105` to `scale-100`) and shift from `grayscale` to full color (`grayscale-0`), taking 1000ms.
- **Philosophy:** Motion should feel cinematic, deliberate, and restrained. It must support the reading rhythm without depending on fixed viewport-sized sections.

---

## 10. Iconography
- **Family:** Tabler Icons via `@tabler/icons-react`.
- **Style:** Prefer clean outline icons with consistent geometry and a `strokeWidth` around `1.5`–`2`.
- **Color:** Monochrome-first using `currentColor` or theme-aware classes such as `text-black dark:text-white`, often paired with opacity.
- **Accessibility:** Decorative icons use `aria-hidden="true"`; meaningful icon-only controls must have an accessible label.
- **Rule:** NO emojis. Icons should feel structural, technical, and visually quiet.

---

## 11. Layout Language
- **Container Strategy:** Centered containers capturing maximum width, surrounded by bleeding background elements.
- **Alignment:** Text blocks are heavily left-aligned to ground the typography. Section headers are often centered (`text-center`) to act as chapter markers.
- **Visual Balance:** Asymmetrical layouts (e.g., Project section 7/5 split) create dynamic tension.

---

## 12. Component Language
- **Project Cards:**
  - *Purpose:* Showcase work.
  - *Visuals:* Sharp corners, 16/10 aspect ratio image (grayscale by default), large blend-mode numbering, tight text layout adjacent.
- **Outline Buttons:**
  - *Purpose:* Primary call to action.
  - *Visuals:* `border border-black dark:border-white`, sharp corners (0px radius), wide-tracked uppercase text, arrow icon shifting on hover.
- **Skills Grid Cards:**
  - *Purpose:* Technical capability display.
  - *Visuals:* Sharp 1px border (`border-black/10`), overlapping absolute-positioned category labels, list-style typography.

---

## 13. UX Philosophy
- The portfolio aims to create a **Slow Browsing** and **Storytelling** experience.
- CSS Scroll Snapping is used locally for focused horizontal interactions such as the FM Dictionary gallery (`snap-x snap-mandatory`). The main page must remain naturally scrollable; do not impose global vertical snapping or force every section into a viewport-sized slide.
- It prioritizes professional credibility and an engineering focus, stripping away UI distractions so the content and the structural code itself stand out.

---

## 14. Brand Personality
If this portfolio were a person, it would be a **Minimalist Architect**. Confident in their foundation, precise in their execution, favoring structural integrity over flashy decoration, and appreciating the fine line between engineering and editorial art.

---

## 15. Design Constraints (The "Do Not" List)
Future developers and designers MUST NOT violate these rules:
- **DO NOT over-round components:** Keep all UI elements (cards, buttons, tags) sharp (0px border-radius).
- **DO NOT introduce arbitrary decorative colors:** Maintain the monochrome-first theme. Semantic colors for error, warning, success, or information are allowed when necessary, but must be paired with text or icons and must not be the only way to understand a state.
- **DO NOT add drop shadows:** Rely on borders and opacities for depth.
- **DO NOT replace the geometric layouts:** Maintain the stark, grid-based approach.
- **DO NOT flatten the typography hierarchy:** Use the responsive role-based scale defined above. Keep hero headers dramatic (`md:text-8xl` when the viewport and content allow it), but let body and supporting text use smaller readable sizes.
- **DO NOT add emojis:** Use Tabler monochromatic icons consistently instead of emoji or mixed icon families.

---

## 16. Things Worth Preserving (Untouchables)
- **The Typography Mixing:** The juxtaposition of Space Grotesk (technical/stark) with Playfair Display Italic (artistic/elegant) is the core visual hook.
- **The Ambient Glows:** The `ambient-glow`, `top-glow`, and `bottom-glow` effects soften the brutalist grid and must remain.
- **The Monochromatic Grayscale Image Hover:** Keeping images grayscale until hovered unifies the color palette aggressively and makes interactions feel rewarding.
- **Bilingual Architecture:** The Next.js App Router uses an internal `[lang]` segment. English is exposed through locale-free canonical URLs, while Vietnamese uses `/vi/` paths. Shared portfolio copy comes from `src/dictionaries/en.json` and `src/dictionaries/vi.json`; page-specific case-study content may remain in co-located bilingual data until it is promoted to shared dictionaries.

---

## 17. Things Safe To Improve
These areas can evolve without breaking the design language:
- **Accessibility:** Improving ARIA labels, focus states (as long as they fit the aesthetic, e.g., a sharp outline), and screen reader support.
- **Responsive Behavior:** Tweaking grid breakpoints for ultra-wide or ultra-narrow screens.
- **Animation Performance:** Optimizing GSAP/ScrollTrigger usage and CSS transitions for lower-end devices.
- **Code Quality:** Refactoring components or abstracting Tailwind classes without altering the rendered DOM aesthetics.

---

## 18. Accessibility & Document Precedence
Accessibility and functional clarity take priority over visual preference.
- **Semantics:** Use native HTML elements first. Interactive controls must be keyboard reachable, have visible `:focus-visible` states, and expose an accessible name.
- **Contrast:** Meet WCAG AA contrast targets for text and controls in both themes. Do not use opacity or semantic color as the only way to communicate meaning.
- **Touch & Text:** Keep interactive targets comfortable on touch devices, allow essential text to wrap, and test long Vietnamese labels without clipping or overlap.
- **Motion:** Respect `prefers-reduced-motion`; non-essential entrance, hover, scroll-linked, and autoplay effects must be reduced or disabled without hiding content or blocking interaction.
- **Responsive Verification:** Check at minimum 320px, 375px, 768px, 1024px, and 1440px widths in English canonical routes and `/vi/` routes, plus light and dark themes.

When project rules conflict, apply this order:
1. User requirements, accessibility, legal, security, and runtime correctness.
2. [`AGENTS.md`](../../AGENTS.md) for project-wide operational, branding, routing, and verification rules.
3. `DESIGN.md` for this project's visual language, tokens, layout, and interaction direction.
4. [`TASTE-SKILL.md`](TASTE-SKILL.md) for general design heuristics; it is advisory and cannot override project-specific rules.

The current implementation is evidence of what exists, not permission to preserve a documented mistake. When code and the documents disagree, identify the intended behavior, then update the smallest necessary source of truth and implementation together.

---

## Design Strengths
1. **Uncompromising Consistency:** The strict adherence to sharp edges and a monochrome-first palette creates a highly trustworthy and premium feel.
2. **Typography as Art:** By utilizing massive font sizes and mixing distinct typefaces, the text itself becomes the primary graphical element.
3. **Atmospheric Depth:** The use of blurred, low-opacity background shapes prevents the strict grid from feeling harsh or dated.

## Risks if Future Developers Ignore DESIGN.md
1. **Loss of Premium Feel:** Adding rounded corners or standard SaaS drop shadows will immediately downgrade the portfolio from "Editorial" to "Generic Template."
2. **Clashing Visuals:** Introducing unstructured decorative colors will break the delicate monochromatic balance and make the ambient glows look muddy.
3. **Pacing Destruction:** Removing deliberate section spacing or focused local gallery snapping can weaken the slow-browsing storytelling experience. The design does not depend on global vertical snapping or fixed viewport-sized content sections.
