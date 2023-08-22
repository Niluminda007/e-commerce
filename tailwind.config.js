/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cold_white: "#EFFFFB",
        green: "#50D890",
        winter_blue: "#4F98CA",
        dark_black: "#272727",
      },
      boxShadow: {
        custom_shadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
      },
    },
  },
  plugins: [],
};
