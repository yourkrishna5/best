/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        natural: {
          light: '#DFF6F6',  // A soft light blue-green
          dark: '#3E6A6A',    // A muted forest green
          accent: '#A4C9C9',  // Soft teal
          background: '#F3F8F8', // Light natural background color
          text: '#4B6B6B', // Muted text color (dark greenish)
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
