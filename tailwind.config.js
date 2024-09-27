/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primeOrange: '#FD6220',
        secondaryOrange: 'rgba(253, 98, 32, 0.2)', 
        customBlue: '#3a6ad6',
        customYellow: '#ffd230',
      },
    },
  },
  plugins: [],
};

