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
        'secondary-blue':{
          100: '#E0EFF6', // Very light blue (disabled light)
          200: '#B3D4E4', // Soft muted blue (disabled)
          300: '#72A1C3', // Medium blue (hover alternative)
          400: '#234F68', // Base color (primary)
          500: '#1D4359', // Darker blue (hover)
          600: '#18384A', // Even darker blue (active or focused)
        },
        'soft-gray': '#F5F4F8',
      }
    },
  },
  plugins: [],
}

