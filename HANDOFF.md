# Portfolio & Projects Handoff — October 2026

## 🎯 Summary of Achievements

This session focused on full-stack performance profiling, eliminating UX bottlenecks, resolving animation stuttering, eliminating double entrance animations on page load, migrating external app landing routes, building editorial error boundary pages, and refining art direction grounded in `checklist-design` and `taste-skill`:

1. **Art Direction Refinements & Anti-Slop Cleanup (`taste-skill` & `checklist-design`)**:
   - **Hero CTA Optimization**: Removed the distracting secondary "Download CV" button; consolidated attention onto the single primary value action: `"View Selected Work"` (`href="#projects"`).
   - **Eliminated AI Tells & Kicker Overuse**: Removed generic uppercase eyebrow / kicker labels (`Portfolio 2026`, `01 / Software`, `02 / Systems`, uppercase tracking tags) from Hero, About, Projects, Skills, and Timeline sections.
   - **Redesigned Skills to Technical Capability Matrix**: Replaced the clichéd Bento Grid (with faded `01`, `02`, `03` numeral watermarks) with an architectural 3-column Technical Capability Matrix (`Primary`, `Practical`, `Operations & Support`) featuring clean 0px borders, explicit focus tiers, and interactive applied technology badges.
   - **Contrast & Accessibility (WCAG AA)**: Raised dimmed text opacities (`opacity-50` / `opacity-70`) to `opacity-75`–`opacity-85` in [SummaryInteractiveView.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/SummaryInteractiveView.tsx) and [TimelineInteractiveView.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/TimelineInteractiveView.tsx).

2. **ScrollSpy Modernization & Performance**:
   - Refactored [ScrollSpyInit.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ScrollSpyInit.tsx) from 171 lines of manual scroll/resize listeners, window offset calculations, and DOM measurements to a native, high-performance `IntersectionObserver` with `rootMargin: "-20% 0px -65% 0px"`.
   - Preserved accessible smooth scrolling, tabindex focus management, and cross-route session pending scroll restoration.

3. **FM Dictionary App Landing & Legal Routes Clean Up & Permanent Redirects**:
   - **Scope Removed**: Deleted obsolete mobile app landing and legal subpages: `/fm-dictionary/`, `/fm-dictionary/support/`, `/fm-dictionary/privacy-policy/`, `/fm-dictionary/terms-of-service/`, `/fm-dictionary/delete-account/`, as well as `src/components/support/FAQAccordion.tsx` and legacy public assets.
   - **Preserved Engineering Case Study**: Retained [src/app/[lang]/fm-dictionary/case-study/page.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/fm-dictionary/case-study/page.tsx) as part of the core portfolio project evidence.
   - **Configured Permanent Redirects**:
     - Configured in [next.config.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/next.config.ts) and [src/proxy.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/proxy.ts) to permanently redirect all incoming traffic (`/fm-dictionary`, `/vi/fm-dictionary`, etc.) to the official production site `https://fm-dictionary.pages.dev/` (and `/privacy/`, `/terms/`).
   - **Portfolio & Sitemap Alignment**:
     - Updated [src/content/projects.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects.ts) to point `externalHref` to `https://fm-dictionary.pages.dev/`.
     - Streamlined [src/components/Header.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/Header.tsx) and [src/components/Footer.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/Footer.tsx) by removing obsolete `variant="fm"` logic.
     - Updated [src/app/sitemap.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/sitemap.ts) to reflect the active 15 static canonical pages.

4. **Architectural, Monochromatic 404 & Error Boundaries**:
   - Built custom bilingual [src/app/[lang]/not-found.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/not-found.tsx) and [src/app/not-found.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/not-found.tsx) adhering to [docs/design/DESIGN.md](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/docs/design/DESIGN.md) and `design-taste-frontend`:
     - Monumental typography (`font-display text-9xl`), sharp 0px corners, 1px whisper borders, and ambient glow.
     - Actionable, non-dead-end navigation: "Return to terminal" and "Explore selected work".
   - Created client error boundary [src/app/[lang]/error.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/error.tsx) with retry and return actions.

5. **Eliminated Double-Loading Entrance Animations**:
   - Configured `reactStrictMode: false` in [next.config.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/next.config.ts).
   - Implemented single-invocation timestamp guards in [HomeAnimations.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/HomeAnimations.tsx) and [CaseStudyAnimations.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/case-study/CaseStudyAnimations.tsx) with explicit `dependencies: []`.

6. **Imported Design Checklists & Taste Skills from `fm_dictionary_landing`**:
   - Integrated `.agents/skills/checklist-design/` (129 industry-standard checklists).
   - Integrated `.agents/skills/taste-skill/` (anti-slop art direction).

7. **Build Verification**:
   - Verified clean production build: `npm run build` succeeds in ~4.0s across all 15 static pages without warnings.

---

## 🛠️ Suggested Skills for Next Agent
- **`checklist-design`**: Audit and critique components, landing pages, and UI flows.
- **`taste-skill`**: Art direction, automated layout inspection, and anti-slop rules.
- **`gsap-performance`**: Best practices regarding GPU rasterization and transforms.
