/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'screen': '769px',
        'custom-min': '769px',
        'custom-max': '1025px',
      }
    },
  },
  plugins: [],
}