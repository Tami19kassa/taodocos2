// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   // tailwind.config.js
  theme: {
    extend: {
      // tailwind.config.js -> theme.extend.fontFamily
fontFamily: {
  // Use the font names directly
  sans: ['Noto Sans', 'sans-serif'],
  serif: ['Playfair Display', 'serif'],
  cursive: ['Great Vibes', 'cursive'],
},
      colors: {
        // Custom color palette
        primary: {
          light: '#4f46e5', // A vibrant indigo
          DEFAULT: '#4338ca',
          dark: '#312e81',
        },
        gold: {
          light: '#fde047',
          DEFAULT: '#facc15', // A warm, inviting gold
          dark: '#eab308',
        }
      }
    },
  },
}