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
        syne: ["Syne", "Montserrat", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
      brightness: {
        25: ".25",
      },
    },
    colors: {
      blue: {
        link: "#47ABEE",
        light: "#327AD9",
        DEFAULT: "#18212A",
        dark: "#101822",
      },
      red: {
        light: "#FF8189",
        DEFAULT: "#FF4654",
        dark: "#7F041A",
      },
      white: {
        DEFAULT: "#FFFAFA",
        full: "#FFF",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
