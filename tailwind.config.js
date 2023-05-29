/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html"],
  extend: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
  }
  theme: {
    colors: {
      'lightSand': '#FCF7E6',
      'oran': '#f97316',
    },
  },
  plugins: [],
}



