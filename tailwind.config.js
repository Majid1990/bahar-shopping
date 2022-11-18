/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor24: '#C3DADF',
        primary: '#006175',
        'red' : '',
        'regal-blue': '#243c5a',
      },
      margin: {
        '50px' : '50px'
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
} 