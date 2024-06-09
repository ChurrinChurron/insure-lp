/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm": 'DM Serif Display',
        "karla": 'Karla'
      },
      colors: {
        "darkViolet": "#2d2640"
      }
    },
  },
  plugins: [],
}