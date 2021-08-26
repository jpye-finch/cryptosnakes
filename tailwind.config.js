module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Balsamiq Sans"', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
],
daisyui: {
  styled: true,
},
}

