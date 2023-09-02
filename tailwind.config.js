/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: {
          900: '#EB3A45',
          800: '#ED4d57',
          700: '#EF616A',
          600: '#F1757C',
          500: '#F3888F',
          400: '#F59CA1',
          300: '#F7B0B4',
          200: '#F9C3C7',
          100: '#FBD7D9'
        },
        secondary: {
          900: '#0E1729',
          800: '#262e3e',
          700: '#3E4553',
          600: '#565C69',
          500: '#6E737E',
          400: '#868B94',
          300: '#9EA2A9',
          200: '#B6B9BE',
          100: '#CED0D4',
        }
      },
      fontFamily : {
        poppins : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

