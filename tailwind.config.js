/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter Variable", "Inter", "sans-serif"],
        display: [
          "var(--font-space-grotesk)",
          "Space Grotesk Variable",
          "Space Grotesk",
          "sans-serif",
        ],
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
