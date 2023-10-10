/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    extend: {
      backgroundImage: {
        'metal-bg': "url('./public/metalbg.png')",
        'wood-bg': "url('./public/wood-bg.jpg')",
        'halloween-bg': "url('./public/halloweenbg.jpg')"
      }
    },
  },
  plugins: [],
}