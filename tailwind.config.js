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
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-inter)', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        bgLight: '#fcfcfc',
        textLight: '#111111',
        bgDark: '#080808',
        textDark: '#eeeeee',
        accent: '#000000',
        accentDark: '#ffffff',
      },
    },
  },
  plugins: [],
}
