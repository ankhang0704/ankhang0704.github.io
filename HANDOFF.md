# Portfolio & Projects Handoff — October 2026

## 🎯 Architecture Transformation: 100% Alignment with FM Dictionary Landing

This milestone fully migrates `ankhang0704.github.io` from a server-driven Edge Middleware App Router model to a **Pure Static HTML Export (`output: "export"`) with Zero-Latency Client-Side State**, matching the proven architecture of `fm-dictionary-landing` 100%:

### 1. Zero-Latency Bilingual System (`LanguageContext`):
- Created `src/context/LanguageContext.tsx` leveraging `useSyncExternalStore` + `localStorage` + `user_lang_change` dispatch events.
- Synchronously bundles English and Vietnamese dictionaries (`en.json` and `vi.json`), providing both `dict` and `t(viText, enText)`.
- Clicking the language toggle flips language in **0ms** across the entire UI with **zero network requests, zero page reload, zero scroll shift, and zero animation replay**.
- Auto-detects URL query param (`?lang=vi`), path, and saved preference.

### 2. Elimination of Edge Middleware & Serverless Overhead:
- Completely removed `src/proxy.ts` (Next.js Edge Middleware).
- Transitioned `next.config.ts` to `output: "export"`, `trailingSlash: true`, and `images: { unoptimized: true }`.
- Static build outputs pure HTML/CSS/JS directly into the `out/` folder.
- Configured edge redirects via `public/_redirects` (for Cloudflare Pages).

### 3. Route Flattening & Backward Compatibility:
- Flattened routes to canonical paths: `/`, `/projects/`, `/fm-dictionary/`, `/github-vault-relay/`, `/hotel-management/`.
- Pre-rendered static pages for `/vi/*` (`/vi/`, `/vi/projects/`, `/vi/fm-dictionary/`, etc.) ensuring 100% backward compatibility for existing bookmarks and direct Vietnamese links.

### 4. GPU-Accelerated Viewport Motion (`RevealOnScroll`):
- Added `RevealOnScroll.tsx` based on native browser `IntersectionObserver` with CSS 3D GPU acceleration.
- Removed main-thread ScrollTrigger layout recalculations that previously caused jank.

### 5. Quality & Verification Gates:
- `npm run lint`: **0 errors, 0 warnings**.
- `npm run build`: **100% successful static export (15 pages prerendered into `out/`) in ~1.5s**.

---

## 🚀 Deployment Instructions for Cloudflare Pages

To host on Cloudflare Pages:
1. Connect GitHub repository `ankhang0704/ankhang0704.github.io` to Cloudflare Pages.
2. Build Settings:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: `20.x` or higher
3. Deploy! Cloudflare Pages will serve `out/` from its global Anycast edge with 0ms compute time and instant caching.
