# Routing & Deployment Rules

## Overview
To ensure the site works correctly on Vercel and avoids 404 errors when navigating within subdirectories (like `/fm-dictionary/`), specific routing rules must be followed.

## 🚀 Vercel Configuration
The `vercel.json` file must include the following settings:
- `"cleanUrls": true`: Removes `.html` extension from URLs.
- `"trailingSlash": true`: Ensures that directory requests are redirected to a URL with a trailing slash, which is critical for the browser to resolve relative paths correctly if they are still used (though root-relative is preferred).

## 🔗 Link & Path Standards
All internal links, assets (CSS/Images), and scripts must use **Root-Relative Paths**.

### 1. Internal Navigation
- **Folders:** Always end with a slash.
  - ❌ `href="fm-dictionary"`
  - ❌ `href="fm-dictionary/index.html"`
  - ✅ `href="/fm-dictionary/"`
- **Pages:** Use the full path from root.
  - ❌ `href="privacy-policy.html"` (inside a subfolder)
  - ✅ `href="/fm-dictionary/privacy-policy.html"`

### 2. Assets & Scripts
- Always start with `/`.
  - ❌ `href="../style.css"`
  - ❌ `src="script.js"`
  - ✅ `href="/style.css"`
  - ✅ `src="/script.js"`

## 🛠 Why this is necessary
Without `trailingSlash: true` and root-relative paths, accessing `/fm-dictionary` (no slash) causes the browser to think it is at the root level. Subsequent clicks on relative links like `privacy-policy.html` will point to `/privacy-policy.html` instead of `/fm-dictionary/privacy-policy.html`, resulting in a 404 NOT FOUND error.
