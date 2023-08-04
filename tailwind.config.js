/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        xl: "1240px",
      },
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

