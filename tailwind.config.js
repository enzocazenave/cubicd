/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'yellow-cubicd': '#EDFF53',
      },
      lineHeight: {
        '28': '1.75rem',
        '58': '3.625rem',
        '72': '4.5rem'
      }
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif']
    }
  },
  plugins: [],
}