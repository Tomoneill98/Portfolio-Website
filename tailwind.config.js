/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        homeGreen: "#6fdcbf",
        aboutPurple: "#ad8fda",
        projectsYellow: "#fdf8b3",
        skillsPink: "#F8C8DC",
      },
      fontFamily: {
        mono: ["Menlo", "Monaco", "Consolas"],
      },
    },
  },
  plugins: [],
};
