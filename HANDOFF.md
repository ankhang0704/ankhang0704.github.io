# Portfolio & Projects Handoff — October 2026

## 🎯 Summary of Achievements

This session focused on full-stack performance profiling, eliminating UX bottlenecks, resolving animation stuttering, eliminating double entrance animations on page load, migrating external app landing routes, building editorial error boundary pages, harmonizing case study routing, and redesigning architecture diagrams grounded in `checklist-design` and `taste-skill`:

1. **FM Dictionary Case Study Canonicalization & URL Consolidation**:
   - Consolidated the FM Dictionary case study route from `/fm-dictionary/case-study/` to `/fm-dictionary/` (and `/vi/fm-dictionary/`), harmonizing it with the sibling case studies (`/github-vault-relay/` and `/hotel-management/`).
   - Configured permanent 308 redirects in [next.config.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/next.config.ts) and [src/proxy.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/proxy.ts) forwarding all legacy `/fm-dictionary/case-study/` traffic to the canonical `/fm-dictionary/` route.
   - Preserved external legal & app redirects (`/privacy-policy/`, `/terms-of-service/`, `/support/`, `/delete-account/`) pointing to the official production site `https://fm-dictionary.pages.dev/`.
   - Updated [sitemap.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/app/sitemap.ts), [Header.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/Header.tsx), and [projects.ts](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/content/projects.ts).

2. **Unified Architectural Hero Standard Across All 3 Case Studies**:
   - Replaced awkward inline breadcrumbs (`[← Về trang chủ] Open source plugin`) with a minimalist, structured anchor row:
     - Left: Clean index back-link (`← Index / Category`)
     - Right: Verified status and year badge (`2026 · VERIFIED ARCHITECTURE`).
   - Standardized on a 2-column editorial hero (`col-span-7` typography & CTAs, `col-span-5` precision engineering preview frame).
   - Added uniform 4-column KPI evidence strips (`border-y border-black/10 divide-x divide-black/10`) below the hero on all 3 case studies.

3. **Architectural Blueprint & Diagram Redesign (`taste-skill` & `DESIGN.md`)**:
   - **FM Dictionary**: Replaced basic cards with a **3-Tier Multi-Boundary Blueprint** (Client Edge Local Core, Cloudflare Edge Gateway, Firebase Async Persistence) + embedded the verified `/fm-offline-architecture.webp` schematic.
   - **Hotel Management**: Replaced primitive ASCII/unicode text boxes with a **Modular Two-Tier Architectural Schema** (Django 5.x MVT Monolith with ACID transactions & ORM tuning, decoupled Semantic Inquiry Bus, FAISS Vector RAG Assistant).
   - **GitHub Vault Relay**: Replaced static cards with a **Connected 6-Stage Cryptographic Sync Pipeline** with explicit data artifact outputs and state classification matrix.

4. **Complete Typography Streamlining (2-Font Precision System)**:
   - Eliminated `Playfair Display` and all `font-serif` occurrences across the codebase.
   - Standardized on a cohesive 2-font system: **`Space Grotesk`** (architectural display headers) + **`Inter`** (crisp body typography), cutting font request overhead and eliminating the "editorial shortcut" AI cliché.

5. **Grounded Visual Proof & Technical Viewport Frames**:
   - Replaced generic static thumbnails and oversized watermark numbers with **Precision Engineering Viewports** in [ProjectsInteractiveView.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/home/ProjectsInteractiveView.tsx):
     - Viewport chrome header with status indicator and project code.
     - Verified engineering spec badges for each project (e.g. `1,847 Terms · Hive Offline · Cloudflare STT Proxy`, `Django 5 + SQLite · FAISS Vector RAG`, `Obsidian Plugin · GitHub REST API`).

6. **Holistic Motion Upgrade with Native GSAP (Option A across all sections & screens)**:
   - Hero curtain reveal, dual-axis About reveal, project image scroll parallax scrub, 3-column skills matrix stagger, continuous timeline line-drawing, and circuit-like case study node highlights.

7. **Build & CI/CD Deployment Verification**:
   - Resolved CI lint check failure on Vercel by ignoring `.agents/**` in [eslint.config.mjs](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/eslint.config.mjs) and registering GSAP's `ScrollTrigger` in [CaseStudyAnimations.tsx](file:///c:/Users/Admin/Documents/Github/ankhang0704.github.io/src/components/case-study/CaseStudyAnimations.tsx).
   - Clean production build: `npm run build` succeeds in ~4.0s across all 15 static canonical pages; `npm run lint` completes with 0 errors and 0 warnings.
   - Vercel production deployment verified live (`HTTP/1.1 200 OK` on `https://ankhang0704.vercel.app/vi/fm-dictionary/` and `https://ankhang0704.vercel.app/fm-dictionary/`, with 308 redirects properly preserving `/case-study/` legacy routes).

---

## 🛠️ Suggested Skills for Next Agent
- **`checklist-design`**: Audit and critique components, landing pages, and UI flows.
- **`taste-skill`**: Art direction, automated layout inspection, and anti-slop rules.
- **`gsap-performance`**: Best practices regarding GPU rasterization and transforms.
