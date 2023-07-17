/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#EEEEEE",
          secondary: "#F4B000",
          tartary: "#255ABF",
        },
        white: {
          main: "#FFFFFF",
        },
        black: {
          main: "#000000",
        },
        error: "#FE0000",
        success: "#5CA44A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow:{
        auth:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        secondary:"rgba(0, 0, 0, 0.1) 0px 10px 30px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
