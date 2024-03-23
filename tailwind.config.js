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
          10: '#001529',
          20: 'rgb(31,44,63)',
          30: 'rgb(47,54,82)',
          90: '#18223f'
        },
        gold: {
          10: '#c7911b'
        },
        grey: {
          20: '#d0d0d0',
          40: '#8c909e',
          217: 'rgb(217,217,217)'
        },
        white: {
          DEFAULT: '#ffffff',
          244: 'rgb(244,244,244)',
          250: 'rgb(250,250,250)'
        },
        orange: {
          10: '#f26b38'
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
