/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg': '#fff8f5', //Custom background
        'custom-primaryRed': '#FFA992',
      },
      colors: {
        'shadow-color': '#FFA992',
      },
    },
  },
  plugins: [],
}

