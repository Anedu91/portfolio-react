module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#5bb9e8',
        'modal' : 'rgba(0,0,0,.6)'
      },
      inset:{
        '-1/4': '-10%' 
      },
      transform:['hover', 'focus'],
      zIndex:{
        '-1': '-1'
      }
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
