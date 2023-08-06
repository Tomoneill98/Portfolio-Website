/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        homeGreen: "#6fdcbf",
        pastelPurple: "#EBCCFF",
        pastelYellow: "#fdf8b3",
        pastelBlue: "#afd5f0",
        pastelPink: "#F6B2d7",
        darkPurple: "#774169",
        darkPurple2: "#4c3a69",
        taylorPurple: "#d3bbd7",
        taylorRed: "#8b3d4b",
        offWhite: "#f8f8f8",
        darkPink: "#c37892",
        darkGrey: "#2d2a31",
        darkBlue: "#3d426b",
      },
      fontFamily: {
        mono: ["Menlo", "Monaco", "Consolas"],
      },
    },
  },
  plugins: [],
};
