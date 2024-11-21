/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sml': {'min': '300px', 'max': '500px'},
        'sml2': {'min': '501px', 'max': '700px'},
      }
    },
  },
  plugins: [],
}
