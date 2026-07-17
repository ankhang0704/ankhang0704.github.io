/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        bgLight: '#fafafa',
        textLight: '#111111',
        bgDark: '#0a0a0a',
        textDark: '#ededed',
        cardLight: '#ffffff',
        cardDark: '#121212',
      },
    },
  },
  plugins: [],
}
