/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        secondary: "#393E46",
        background: "#222831",
        "text-primary": "#EEEEEE",
        "text-secondary": "#757575",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "480px",
        desktop: "1440px",
        xxs: "320px",
      },
      backgroundImage: {
        "projects-texture": "url('/bg-img.png')",
      },
    },
  },
  plugins: [],
};
