/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'select-brown': '#4C4747',
        'odd-red': '#A10808',
        'even-orange': '#A16B08',
        'black-adam': '#131313',
      },
      boxShadow: {
        'white-card': '0.0313rem -0.125rem 0.625rem rgba(255, 255, 255, 0.25)'
      },
      gridTemplateColumns: {
        'list': 'repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr))'
      }
    },
  }
}

