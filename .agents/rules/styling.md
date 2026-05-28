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

## Mandatory UI Components
- **Ambient Glow:** Fixed radial gradients (`top-glow`, `bottom-glow`) with low opacity to add depth.
- **Glassmorphism:** Navbar must use `glass-nav` class on scroll (background opacity + backdrop blur).
- **Monochromatic Icons:** Icons should not have distinct colors (like `text-blue-500`). Use `text-black dark:text-white`.
- **Text Visibility:** Footer copyright and ownership text must be `opacity-80` or higher to ensure accessibility.
