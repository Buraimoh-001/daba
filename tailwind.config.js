module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        
        "bookmark-fade":"#A6A6A6",
        "bookmark-green":"#4CAF50",
        "bookmark-yellow":"#FFFF00",
        "bookmark-black":"#000000",
        "bookmark-purple":"#5267DF",
        "bookmark-red":"#FA5959",
        "bookmark-blue":"#0E56C0",
        "bookmark-grey":"#9194A2",
        "bookmark-white":"#F4F8FD",
        "bookmark-off":"#FFFFFF",
       

      }
    },
    fontFamily:{
      Poppins:[
        "Poppins, sans-serif"],
    },
    container:{
      center: true,
      padding: '1rem',
      screens : {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
