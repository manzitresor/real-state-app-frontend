/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#8BC83F',
        'secondary-blue': '#234F68',
        'soft-gray': '#F5F4F8',
      }
    },
  },
  plugins: [],
}

