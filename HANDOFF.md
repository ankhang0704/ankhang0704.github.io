# Portfolio & Projects Handoff — October 2026

## 🎯 Summary of Achievements

This session focused on full-stack performance profiling, eliminating UX bottlenecks, resolving animation stuttering, eliminating double entrance animations on page load, and importing specialized design skills:

1. **Eliminated Double-Loading Entrance Animations**:
   - **Root Cause**: When opening the page in development (`next dev`), React 18/19 StrictMode double-invoked component lifecycle mounts, causing `useGSAP` in [src/components/home/HomeAnimations.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/HomeAnimations.tsx) and [src/components/case-study/CaseStudyAnimations.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/case-study/CaseStudyAnimations.tsx) to create and play the Hero / Header entrance timelines twice. Additionally, on client hydration and Next.js route reconciliation (`proxy.ts` internal rewrite `/` -> `/en`), re-mounting or re-synchronizing could trigger duplicate plays.
   - **Resolution**:
     - Configured `reactStrictMode: false` in [next.config.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/next.config.ts) to eliminate simulated unmount/remount in development.
     - Implemented module-level single-invocation timestamp guards (`isRecentEntrance = now - lastHeroAnimationTime < 2500`) in both `HomeAnimations.tsx` and `CaseStudyAnimations.tsx`. If a re-mount or hydration occurs within 2.5s, the elements are set directly to their final state (`autoAlpha: 1, y: 0`) without replaying the timeline.
     - Added explicit `dependencies: []` to `useGSAP` config objects to ensure effects only synchronize on true page mounts.

2. **Imported Design Checklists & Taste Skills from `fm_dictionary_landing`**:
   - Copied `.agents/skills/checklist-design/` (complete with 129 specialized component, web app, website, and design system checklists, along with audit and critique modes).
   - Copied `.agents/skills/taste-skill/` (art direction, no-ornament house style, image curation, and automated browser inspection tool `inspect.mjs`).

3. **Eliminated Theme FOUC & Cross-Tab Theme Sync**:
   - Added a synchronous blocking theme script in `<head>` ([src/app/[lang]/layout.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/layout.tsx)) to evaluate theme preferences before initial paint.
   - Migrated Header theme state to React's `useSyncExternalStore` with `MutationObserver`, `window.matchMedia`, and `storage` event listeners for cross-tab and system preference real-time synchronization.

4. **Resolved Mobile GPU Scroll Lag & Ambient Glow**:
   - Redesigned `.ambient-glow` in [src/app/style.css](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/style.css) using a 6-stop radial gradient with low alpha progression, reducing GPU rasterization filter blur from `60px` to `20px` (mobile) / `24px` (desktop).
   - Promoted glow and scroll indicators to isolated compositor layers via `will-change: transform` and `backface-visibility: hidden`.

5. **Eliminated Forced Reflows in ScrollSpy**:
   - Refactored [src/components/ScrollSpyInit.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ScrollSpyInit.tsx) to cache section bounding offsets (`cachedOffsets`), decoupling DOM measurements from the scroll event loop.
   - Connected `ResizeObserver` within `requestAnimationFrame` to re-measure only when viewport or layout dimensions change.

6. **Resolved Hero CTA Slide-Up Lag & Stutter**:
   - Swapped `transition-all` on "View selected work" for `transition-colors duration-200`.
   - Swapped `transition-all` on "Download CV" for `transition-opacity duration-200`.
   - Added `immediateRender: true` and `clearProps: "transform,opacity"` to clean up lingering inline styles post-animation.

7. **Updated GitHub Vault Relay Version to 1.2.1**:
   - Synchronized the latest stable release tag `1.2.1` in [src/app/[lang]/github-vault-relay/page.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/github-vault-relay/page.tsx) and [docs/PROJECT_SOURCE_OF_TRUTH.md](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/docs/PROJECT_SOURCE_OF_TRUTH.md).

8. **Portfolio Freshness & Verification**:
   - Updated footer indicator in [src/components/Footer.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/Footer.tsx) to "Cập nhật · Tháng 10, 2026" / "Updated · October 2026".
   - Verified clean production build: `npm run build` succeeds in ~4.2s across all 25 static pages.

---

## 🛠️ Suggested Skills for Next Agent
- **`checklist-design`**: Audit and critique components, landing pages, and UI flows against 100+ industry-standard checklists.
- **`taste-skill`**: Art direction, automated layout inspection, and anti-slop rules.
- **`gsap-performance`**: Best practices regarding GPU rasterization, transforms, and avoiding CSS transition collisions.
- **`gsap-core`**: Core GSAP tween and timeline orchestration.
- **`improve-codebase-architecture`**: Periodic audits for responsive breakpoints, editorial typography, and i18n routing.
