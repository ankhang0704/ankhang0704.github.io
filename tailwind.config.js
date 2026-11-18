/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      colors: {
        bgLight: "#fafafa",
        textLight: "#111111",
        bgDark: "#0a0a0a",
        textDark: "#ededed",
        cardLight: "#ffffff",
        cardDark: "#121212",
      },
    },
  },
  plugins: [],
};
