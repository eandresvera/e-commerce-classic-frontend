module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
          primary: {
            light: '#7efffa',
            main: '#3fe0c7',
            dark: '#00ad96',
            darkest: '#007d68',
            golden: '#E2A500',
          }
        },
        maxHeight: {
          '550': '550px',
          '70v': '70vh'
        },
        maxWidth: {
          '550': '550px'
        },
        height: {
          "10v": "10vh",
          "20v": "20vh",
          "30v": "30vh",
          "40v": "40vh",
          "50v": "50vh",
          "60v": "60vh",
          "70v": "70vh",
          "80v": "80vh",
          "90v": "90vh",
          "100v": "100vh",
          "420px": "420px",
          "460px": "460px",
        },
      },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active']
    },
  },
  plugins: [],
}
