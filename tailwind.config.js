/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        bgGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.66) 100%)",
      },
      fontFamily: {
        DMSans: "sans-serif",
      },
    },
  },
  plugins: [],
};
