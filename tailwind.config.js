/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_dark: "#305D62",
        primary_light: "#5F8B7E",
        background_light: "#DFEEEB",
      },
    },
  },
  plugins: [],
};
