# Portfolio & Projects Handoff — October 2026

## 🎯 Summary of Achievements

This session focused on full-stack performance profiling, eliminating UX bottlenecks, resolving animation stuttering, eliminating double entrance animations on page load, migrating external app landing routes, building editorial error boundary pages, and refining art direction grounded in `checklist-design` and `taste-skill`:

1. **Complete Typography Streamlining (2-Font Precision System)**:
   - Eliminated `Playfair Display` and all `font-serif` occurrences across the codebase.
   - Standardized on a cohesive 2-font system: **`Space Grotesk`** (architectural display headers) + **`Inter`** (crisp body typography), cutting font request overhead and eliminating the "editorial shortcut" AI cliché.
   - Refactored headings across Hero, 404, 500 Error, and all Case Study pages (`FM Dictionary`, `GitHub Vault Relay`, `Hotel Management`).

2. **Grounded Visual Proof & Technical Viewport Frames**:
   - Replaced generic static thumbnails and oversized watermark numbers with **Precision Engineering Viewports** in [ProjectsInteractiveView.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/ProjectsInteractiveView.tsx):
     - Viewport chrome header with status indicator and project code.
     - Verified engineering spec badges for each project (e.g. `1,847 Terms · Hive Offline · Cloudflare STT Proxy`, `Django 5 + SQLite · FAISS Vector RAG`, `Obsidian Plugin · GitHub REST API`).
     - Grounded, truthful technical proof with zero marketing exaggeration.

3. **Holistic Motion Upgrade with Native GSAP (Option A across all sections & screens)**:
   - **Hero**: Curtain reveal using masked overflow containers (`yPercent: 110` -> `0`, `ease: "power4.out"`), followed by subtitle focus and CTA entrance.
   - **About**: Dual-axis compositional reveal separating credentials column (`x: -24` -> `0`) and narrative (`y: 30` -> `0`).
   - **Projects**: Staggered card entrance combined with subtle scroll parallax on preview images (`yPercent: -4` to `4` scrub).
   - **Skills Matrix**: Construction-style 3-column stagger (`Primary`, `Practical`, `Operations & Support`).
   - **Timeline**: Continuous line-drawing scrub synchronized with horizontal milestone glides.
   - **Case Studies**: Enhanced [CaseStudyAnimations.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/case-study/CaseStudyAnimations.tsx) with parallax on `.cs-cover-img` and circuit-like stagger on `.cs-diagram-node`.

4. **ScrollSpy Modernization & Performance**:
   - Refactored [ScrollSpyInit.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ScrollSpyInit.tsx) from 171 lines of manual scroll/resize listeners, window offset calculations, and DOM measurements to a native, high-performance `IntersectionObserver` with `rootMargin: "-20% 0px -65% 0px"`.
   - Preserved accessible smooth scrolling, tabindex focus management, and cross-route session pending scroll restoration.

5. **FM Dictionary App Landing & Legal Routes Clean Up & Permanent Redirects**:
   - Deleted obsolete mobile app landing and legal subpages: `/fm-dictionary/`, `/fm-dictionary/support/`, `/fm-dictionary/privacy-policy/`, `/fm-dictionary/terms-of-service/`, `/fm-dictionary/delete-account/`, as well as `src/components/support/FAQAccordion.tsx` and legacy public assets.
   - Retained [src/app/[lang]/fm-dictionary/case-study/page.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/fm-dictionary/case-study/page.tsx) as part of core portfolio project evidence.
   - Configured permanent 308 redirects in [next.config.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/next.config.ts) and [src/proxy.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/proxy.ts) to `https://fm-dictionary.pages.dev/`.
   - Updated [src/app/sitemap.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/sitemap.ts) to reflect the active 15 static canonical pages.

6. **Architectural, Monochromatic 404 & Error Boundaries**:
   - Built custom bilingual [src/app/[lang]/not-found.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/not-found.tsx) and [src/app/not-found.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/not-found.tsx).
   - Created client error boundary [src/app/[lang]/error.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/error.tsx) with retry and return actions.

7. **Build Verification**:
   - Verified clean production build: `npm run build` succeeds in ~3.9s across all 15 static pages without errors.

---

## 🛠️ Suggested Skills for Next Agent
- **`checklist-design`**: Audit and critique components, landing pages, and UI flows.
- **`taste-skill`**: Art direction, automated layout inspection, and anti-slop rules.
- **`gsap-performance`**: Best practices regarding GPU rasterization and transforms.
