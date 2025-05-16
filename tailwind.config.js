
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#EFFBFA",
        },
        secondary: {
          50: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
