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
- **Negative Space:** Generous padding and margins (`min-h-screen`, `py-20`) create a breathable, unhurried reading experience.
- **Geometric Layout:** Sharp corners and clean grid alignments form a solid architectural foundation.
- **Low Decoration:** Borders are kept to a whisper (1px, low opacity). 
- **Restrained Color:** Strictly monochromatic (black/white/grays) based on the current theme, utilizing opacity for hierarchy.
- **Visual Rhythm:** Structured sectioning with scroll-snapping creates a deliberate, paced journey.

---

## 3. Visual DNA
The recognizable characteristics of this portfolio:
- **Navbar:** Translucent blur (`backdrop-filter: blur(20px)`) with ultra-minimal, uppercase, wide-tracked text.
- **Header/Hero Composition:** Massive typography (`md:text-8xl`), mixing stark geometric sans-serif with elegant serif italics.
- **Project Cards:** Asymmetrical grid split (7/5), featuring a large 16/10 image with a huge, subtle blend-mode difference number overlay.
- **Buttons:** Sharp, transparent outlines with uppercase, wide-tracking text that inverts on hover.
- **Tags:** Tiny (`text-[10px]`), heavily tracked uppercase text with thin, low-opacity borders.
- **Lines & Accents:** Short, 1px horizontal lines (`h-[1px] w-12`) used as section or metadata anchors.
- **Decorative Backgrounds:** Highly blurred `ambient-glow` elements (100px blur) and massive, barely visible (2-5% opacity) grayscale background images with uniquely rounded edges (e.g., `rounded-tr-full`).

---

## 4. Border Radius System
The system aggressively avoids rounded corners for UI elements to maintain an architectural feel.
- **Navbar:** 0px
- **Buttons:** 0px
- **Cards (Images & Containers):** 0px
- **Tags:** 0px
- **Timeline Dots:** 50% (Circles)
- **Background Decorative Images:** Massive, dramatic rounding on a single corner (e.g., `rounded-tr-full`, `rounded-l-full`, `rounded-br-full`) to contrast with the sharp UI.
- **Ambient Glows:** 50% (Circles heavily blurred)

*Why:* Sharp corners convey precision, engineering, and editorial maturity. The only rounded elements are purely decorative background layers, creating a soft backdrop against the strict foreground grid.

---

## 5. Spacing System
- **Container Width:** `container mx-auto px-6 md:px-8` (Max-width approach with standard padding).
- **Section Spacing:** Every section uses `min-h-screen` and `py-20` to guarantee ample breathing room and focus on one concept at a time.
- **Grid:** 12-column foundation (`lg:grid-cols-12` used in projects), 3-column foundation (`md:grid-cols-3` used in skills).
- **Vertical Rhythm:** Large margins below headings (`mb-16`, `mb-20`), generous spacing between paragraphs (`mb-6`).
- **Whitespace Philosophy:** Whitespace is not empty space; it is an active design element used to frame content.

---

## 6. Typography System
Three font families orchestrate the identity:
- **Base/Body (Sans):** *Inter* (`font-sans`). Used for body text, tags, and UI elements. Size `text-xl` for primary reading, light weight (`font-light`), and `opacity-80`.
- **Headings (Display):** *Space Grotesk* (`font-display`). Used for primary impact. Bold weight (`font-bold`), sizes ranging from `text-4xl` to `text-8xl`.
- **Emphasis (Serif):** *Playfair Display* (`font-serif`). Used exclusively in italic for sophisticated, artistic emphasis. Sizes `text-6xl` to `text-9xl`.
- **Metadata/Tags:** Extreme letter spacing (`tracking-widest` or `tracking-[0.2em]`), uppercase, `text-sm` or `text-[10px]`.

---

## 7. Color System
The palette is strictly dual-theme monochromatic.
- **Light Theme:** Background (`#fafafa`), Text (`#111111`), Cards (`#ffffff`).
- **Dark Theme:** Background (`#0a0a0a`), Text (`#ededed`), Cards (`#121212`).
- **Hierarchy via Opacity:** Instead of lighter grays, hierarchy is established via opacity (e.g., `opacity-80` for body text, `opacity-50` for metadata, `black/10` for borders).
- **Gradients:** Radial transparent gradients used *only* for the background ambient glows (black or white at 2-3% opacity fading to transparent).
- **Highlight Colors:** None. The portfolio relies entirely on black, white, and transparency.

---

## 8. Shadow System
- **Usage:** Shadows are intentionally **NON-EXISTENT** on UI elements.
- **Philosophy:** No drop shadows on cards, buttons, or navbars. Depth is achieved through the Z-axis (blur effects, fixed background layers, parallax/scroll reveals) and contrast (1px borders).

---

## 9. Motion Language
- **Scroll Animations:** Controlled via AOS. `fade-up`, `fade-right`, `fade-left`.
- **Duration & Easing:** Long durations (1500ms) with `ease-out-cubic`.
- **Hover Behaviors:** 
  - *Underlines:* Expand from `scaleX(0)` to `scaleX(1)`.
  - *Buttons:* Solid color invert (transparent to solid black/white).
  - *Images:* Scale down slightly (`scale-105` to `scale-100`) and shift from `grayscale` to full color (`grayscale-0`), taking 1000ms.
- **Philosophy:** Motion should feel cinematic, deliberate, and unhurried. Slow transitions match the `min-h-screen` reading pace.

---

## 10. Iconography
- **Family:** Font Awesome 6.4.0.
- **Style:** Solid or regular (`fas`, `fab`).
- **Color:** Strictly monochromatic (`text-black dark:text-white`), often paired with opacity.
- **Rule:** NO emojis. Icons should feel structural and technical.

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
- The use of CSS Scroll Snapping (`snap-y snap-proximity`) paired with `min-h-screen` sections forces the user to view one complete "slide" or thought at a time.
- It prioritizes professional credibility and an engineering focus, stripping away UI distractions so the content and the structural code itself stand out.

---

## 14. Brand Personality
If this portfolio were a person, it would be a **Minimalist Architect**. Confident in their foundation, precise in their execution, favoring structural integrity over flashy decoration, and appreciating the fine line between engineering and editorial art.

---

## 15. Design Constraints (The "Do Not" List)
Future developers and designers MUST NOT violate these rules:
- **DO NOT over-round components:** Keep all UI elements (cards, buttons, tags) sharp (0px border-radius).
- **DO NOT introduce colorful accents:** Maintain the monochromatic theme. Do not add blue links, red error states, or primary colored buttons.
- **DO NOT add drop shadows:** Rely on borders and opacities for depth.
- **DO NOT replace the geometric layouts:** Maintain the stark, grid-based approach.
- **DO NOT alter the typography scale:** Keep body text at `text-xl` and hero headers massive (`md:text-8xl`).
- **DO NOT add emojis:** Use only Font Awesome monochromatic icons.

---

## 16. Things Worth Preserving (Untouchables)
- **The Typography Mixing:** The juxtaposition of Space Grotesk (technical/stark) with Playfair Display Italic (artistic/elegant) is the core visual hook.
- **The Ambient Glows:** The `ambient-glow`, `top-glow`, and `bottom-glow` effects soften the brutalist grid and must remain.
- **The Monochromatic Grayscale Image Hover:** Keeping images grayscale until hovered unifies the color palette aggressively and makes interactions feel rewarding.
- **Bilingual Architecture:** The `data-vi` and `data-en` structure is a core feature that must be preserved on all new text elements.

---

## 17. Things Safe To Improve
These areas can evolve without breaking the design language:
- **Accessibility:** Improving ARIA labels, focus states (as long as they fit the aesthetic, e.g., a sharp outline), and screen reader support.
- **Responsive Behavior:** Tweaking grid breakpoints for ultra-wide or ultra-narrow screens.
- **Animation Performance:** Optimizing AOS triggering or CSS transitions for lower-end devices.
- **Code Quality:** Refactoring components or abstracting Tailwind classes without altering the rendered DOM aesthetics.

---

## Design Strengths
1. **Uncompromising Consistency:** The strict adherence to sharp edges and monochromatic palettes creates a highly trustworthy and premium feel.
2. **Typography as Art:** By utilizing massive font sizes and mixing distinct typefaces, the text itself becomes the primary graphical element.
3. **Atmospheric Depth:** The use of blurred, low-opacity background shapes prevents the strict grid from feeling harsh or dated.

## Risks if Future Developers Ignore DESIGN.md
1. **Loss of Premium Feel:** Adding rounded corners or standard SaaS drop shadows will immediately downgrade the portfolio from "Editorial" to "Generic Template."
2. **Clashing Visuals:** Introducing primary colors will break the delicate monochromatic balance and make the ambient glows look muddy.
3. **Pacing Destruction:** Removing scroll-snapping or reducing section height (`min-h-screen`) will destroy the intended slow-browsing storytelling experience, turning it into a crowded, standard landing page.
