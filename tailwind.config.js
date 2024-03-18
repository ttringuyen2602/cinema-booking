/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#f58020',
        black: {
          DEFAULT: '#000000',
          10: '#333333'
        },
        blue: {
          10: '#034ea2'
        },
        grey: {
          20: '#d0d0d0',
          40: '#777777'
        }
      },
      screens: {
        screen1200: '1200px',
        screen1390: '1390px'
      },
      zIndex: {
        100: '100'
      }
    }
  },
  plugins: []
}
