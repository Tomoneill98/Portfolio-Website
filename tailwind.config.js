/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        homeGreen: "#6fdcbf",
        aboutPurple: "#ad8fda",
        projectsYellow: "#fdf8b3",
        skillsPink: "#F8C8DC",
        darkHomePurple: "#774169",
      },
      fontFamily: {
        mono: ["Menlo", "Monaco", "Consolas"],
      },
    },
  },
  plugins: [],
};
