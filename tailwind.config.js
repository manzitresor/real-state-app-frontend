/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': {
          100: '#DDECCB',  // Very light green (disabled light)
          200: '#BFD8A5',  // Muted green (disabled)
          300: '#9FD64A',  // Brighter green (hover alternative)
          400: '#8BC83F',  // Base color (primary)
          500: '#78AF34',  // Darker green (hover)
          600: '#5C8F2A',  // Even darker (active or focused)
        },
        'secondary-blue': '#234F68',
        'soft-gray': '#F5F4F8',
      }
    },
  },
  plugins: [],
}

