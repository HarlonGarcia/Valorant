/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/images/banner.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      brightness: {
        25: ".25",
      },
    },
    colors: {
      blue: {
        light: "#327AD9",
        DEFAULT: "#18212A",
        dark: "#101822",
      },
      red: {
        DEFAULT: "#FF4654",
        light: "#FF8189",
      },
      white: {
        DEFAULT: "#FFFAFA",
        full: "#FFF",
      },
    },
  },
  plugins: [],
};
