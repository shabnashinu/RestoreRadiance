/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inknut': ['Inknut Antiqua', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'sacramento': ['Sacramento', 'cursive'],
      },
    },
  },
  plugins: [],
}

