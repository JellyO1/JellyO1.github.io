const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './**/*.html'
  ],
  theme: {
    minWidth: {
      '28': '7rem',
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
