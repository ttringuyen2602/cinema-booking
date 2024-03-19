/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#cc2d3f',
          10: '#9e2432'
        },

        black: {
          DEFAULT: '#000000',
          10: '#333333'
        },
        blue: {
          90: '#18223f'
        },
        gold: {
          10: '#c7911b'
        },
        grey: {
          20: '#d0d0d0',
          40: '#8c909e'
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
