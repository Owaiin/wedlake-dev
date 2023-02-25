/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: "Poppins, sans-serif",
        display: "Fredoka, sans-serif",
      },
      colors: {
        htmlRed: "#e34c26",
        cssBlue: "#2965f1",
        jsYellow: "#F0DB4F",
        tsBlue: "#007acc",
        reactBlue: "#61DBFB",
        firebaseYellow: "#FFCB2B",
        netlifyGreen: "#00AD9F",
      },
    },
  },
  plugins: [],
};
