module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      textColor:{
        primary:'#5e60ce',
      },
      boxShadow:{
        primary:'0 25px 30px -12px #5e60ce',
      },
      backgroundImage:theme=>({
        'login-bg':"url('/img/login.svg')",
        'main-bg':"url('/img/skwilaBg.svg')",
        'wave-bg':"url('/img/wave.svg')",
        'main-bg2':"url('/img/login-v3.svg')",
        'main-bg3':"url('/img/login-v4.svg')",
      }),
      minHeight: {
       '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '70': '70%',
       'full': '100%',
      },
      fontFamily:{
        'custom':['Montserrat','sans-serif']
      }
    }, //extend
  },
  variants: {
    extend: {},
  },
  plugins: [
  	require('@tailwindcss/forms'),
  ],
};
