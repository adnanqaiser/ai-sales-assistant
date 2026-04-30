/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#00ff88',
        'dark-bg': '#0a0a0a',
        'text-muted': '#a1a1aa',
      },
    },
  },
  plugins: [],
}
