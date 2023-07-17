/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Poppins",
      body: "Poppins"
    },
    container: {
      padding:{
        DEFAULT:"1rem",
        lg: "3rem",
      } 
    },
    screens: {
      xs: "450px",
      sm: "640px",
      md: "781px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#ffffff",
        tertiary: "#000000",
      }
    },
  },
  plugins: [],
}

