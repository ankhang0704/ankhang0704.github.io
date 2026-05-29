# Styling & UI Rules

## Color Palette (Tailwind Theme)
- `bgLight`: `#fafafa`
- `textLight`: `#111111`
- `bgDark`: `#0a0a0a`
- `textDark`: `#ededed`
- `cardLight`: `#ffffff`
- `cardDark`: `#121212`

## Typography
- **Sans:** `Inter` (Body, UI)
- **Display:** `Space Grotesk` (Headings, Logo)
- **Serif Italic:** `Playfair Display` (Emphasis, premium feel)
- **Sizes (Global Consistency):**
  - Main Hero Titles: `md:text-8xl` (approx 128px on desktop).
  - Primary Body Content (About, Policies): `text-xl` (approx 20px) for high readability.
  - Sub-content/Descriptions: `text-lg` or default.

## Mandatory UI Components
- **Ambient Glow:** Fixed radial gradients (`top-glow`, `bottom-glow`) with low opacity to add depth.
- **Glassmorphism:** Navbar must use `glass-nav` class on scroll (background opacity + backdrop blur).
- **Mobile Navigation:** On screens smaller than `md`, desktop navigation links must be hidden and replaced with a hamburger menu (`mobile-menu-toggle`). An overlay (`mobile-menu`) must be used for navigation on small devices.
- **Monochromatic Icons:** Icons should not have distinct colors (like `text-blue-500`). Use `text-black dark:text-white`.
- **Text Visibility:** Footer copyright and ownership text must be `opacity-80` or higher to ensure accessibility.
