/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '95': '95%',
      },
      height: {
        '80': '80%',
      },
    },
  },
  plugins: [],
}
