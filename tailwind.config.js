module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // NOTE: Add the lines below if you want to add a google font
    // fontFamily: {
    //   sans: ['"name of google font"', 'sans-serif']
    // },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
