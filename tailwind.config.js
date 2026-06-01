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
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
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
