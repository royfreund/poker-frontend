

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'my': {
        'black': '#121212',
        'grey': '#2C3E50',
        'green': '#00FF6A',
        'red': '#FF4C4C',
      },
    },
    extend: {},
  },
  plugins: []
}

