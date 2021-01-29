module.exports = {
  purge: [],
  darkMode: false,
  purge: {
    enabled: true,
    content: ['./**/*.js'],
  }, 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
