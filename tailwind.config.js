/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // screens: {
    //   'ngukuk': '320px',
    // },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

