/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marko-orange': '#FF7F27',
        'marko-red': '#C84444',
        'marko-dark': '#1a1a1a',
        'marko-light': '#f8f8f8',
      },
      fontFamily: {
        'display': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

