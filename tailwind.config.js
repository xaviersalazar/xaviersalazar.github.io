/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      normal: 400,
      bold: 700,
      black: 900,
    },
    extend: {
      boxShadow: {
        "3xl": "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-text-fill")],
};
