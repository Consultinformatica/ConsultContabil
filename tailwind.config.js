/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7A707',
      },
      screens: {
        sml: {
          min: '320px',
          max: '400px',
        },
      }
    },
  },
  plugins: [],
}