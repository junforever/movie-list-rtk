/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'select-brown': '#4C4747',
        'odd-red': '#A10808',
        'even-orange': '#A16B08',
        'black-adam': '#131313',
        'modal': '#1D232A',
        'modal-title': '#A6ADBB',
        'grey-chat': '#2A323C',
      },
      boxShadow: {
        'white-card': '0.0313rem -0.125rem 0.625rem rgba(255, 255, 255, 0.25)'
      },
      gridTemplateColumns: {
        'list': 'repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr))'
      },
      aspectRatio: {
        'movie': '2 / 3',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        bounceInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        "fadeIn-600": 'fadeIn 0.6s ease-in-out',
        "fadeIn-200": 'fadeIn 0.2s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        bounceInDown: 'bounceInDown 0.5s ease-out forwards'
      },
    },
  }
}

