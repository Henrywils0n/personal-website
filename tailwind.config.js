module.exports = {
  content: [  
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    container : {
      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors : {
        'special-gray' : 'rgb(195, 197, 203)',
        'base' :  '#191B1F'
      },
    },
 
    fontFamily : {
      'body' : ['Vazir'],
    } 
  },
  plugins: [],
}
