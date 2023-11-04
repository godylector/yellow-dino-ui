/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "theme": "#ffc900",
        "hover-theme": "#ffaa00"
      }
    },
  },
  plugins: [],
}

