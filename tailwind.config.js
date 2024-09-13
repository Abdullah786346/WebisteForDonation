/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      brightness: {
        50: ".5",
        115: "1.15",
        125: "1.25",
      },
      colors: {
        gray: {
          200: "#EDEDED",
          600: "#2A2A2A",
          700: "#232323",
        },
        blue: {
          50: "#C4E3FF",
          100: "#88888C",
          200: "#706F6F",
          300: "#086FE9",
          400: "#46AEAE",
          500: "#2D7DA1",
          600: "#2F2E41",
          700: "#004F87",
          800: "#031160",
          900: "#2F2E41",
        },
        orange: {
          100: "#FEB702",
          200: "#FD9E02",
          300: "#FB8500",
          800: "#FB8500",
        },
        red: {
          600: "#FC1D1D",
          700: "#A90101",
        },
      },
      fontFamily: {
        main: "Raleway,ui-serif",
        roboto: "Roboto, san-serif",
        playfair: "Playfair Display",
      },
    },
  },
  plugins: [],
};
