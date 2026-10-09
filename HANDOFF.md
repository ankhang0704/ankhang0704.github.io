# Portfolio & Projects Handoff — October 2026

## 🎯 Summary of Achievements

This session focused on full-stack performance profiling, eliminating UX bottlenecks, resolving animation stuttering, and synchronizing project release versions:

1. **Eliminated Theme FOUC & Cross-Tab Theme Sync**:
   - Added a synchronous blocking theme script in `<head>` ([src/app/[lang]/layout.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/layout.tsx)) to evaluate theme preferences before initial paint.
   - Migrated Header theme state to React's `useSyncExternalStore` with `MutationObserver`, `window.matchMedia`, and `storage` event listeners for cross-tab and system preference real-time synchronization.

2. **Resolved Mobile GPU Scroll Lag & Ambient Glow**:
   - Redesigned `.ambient-glow` in [src/app/style.css](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/style.css) using a 6-stop radial gradient with low alpha progression, reducing GPU rasterization filter blur from `60px` to `20px` (mobile) / `24px` (desktop).
   - Promoted glow and scroll indicators to isolated compositor layers via `will-change: transform` and `backface-visibility: hidden`.

3. **Eliminated Forced Reflows in ScrollSpy**:
   - Refactored [src/components/ScrollSpyInit.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/ScrollSpyInit.tsx) to cache section bounding offsets (`cachedOffsets`), decoupling DOM measurements from the scroll event loop.
   - Connected `ResizeObserver` within `requestAnimationFrame` to re-measure only when viewport or layout dimensions change.

4. **Resolved Hero CTA Slide-Up Lag & Stutter**:
   - **Root Cause**: The two CTA buttons (`.hero-cta-btn`) in [src/app/[lang]/page.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/page.tsx) had Tailwind's `transition-all`. During GSAP's 60fps transform timeline, CSS `transition-all` intercepted every transform micro-tick, causing animation fighting and severe stuttering. Furthermore, timeline tweens defaulted to `immediateRender: false`, causing buttons to briefly sit at their final positions before jumping down to animate.
   - **Resolution**:
     - Swapped `transition-all` on "View selected work" for `transition-colors duration-200`.
     - Swapped `transition-all` on "Download CV" for `transition-opacity duration-200`.
     - Added `immediateRender: true` across [src/components/home/HomeAnimations.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/HomeAnimations.tsx) and [src/components/case-study/CaseStudyAnimations.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/case-study/CaseStudyAnimations.tsx).
     - Added `clearProps: "transform,opacity"` to clean up lingering inline styles post-animation.

5. **Updated GitHub Vault Relay Version to 1.2.1**:
   - Synchronized the latest stable release tag `1.2.1` in [src/app/[lang]/github-vault-relay/page.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/[lang]/github-vault-relay/page.tsx) and [docs/PROJECT_SOURCE_OF_TRUTH.md](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/docs/PROJECT_SOURCE_OF_TRUTH.md).
   - Maintained verified minimum Obsidian compatibility (`1.11.4`).

6. **Portfolio Freshness & Verification**:
   - Updated footer indicator in [src/components/Footer.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/Footer.tsx) to "Cập nhật · Tháng 10, 2026" / "Updated · October 2026".
   - Verified clean production build: `npm run build` succeeds in ~5.9s across all 25 static pages.

---

## 🛠️ Suggested Skills for Next Agent
- **`gsap-performance`**: Best practices regarding GPU rasterization, transforms, and avoiding CSS transition collisions.
- **`gsap-core`**: Core GSAP tween and timeline orchestration.
- **`improve-codebase-architecture`**: Periodic audits for responsive breakpoints, editorial typography, and i18n routing.
