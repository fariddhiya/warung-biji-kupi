/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "Inter", "sans-serif"],
      },
      colors: {
        "tawny-brown": "#A27B5C",
        "jet-black": "#121212",
        grey: "#717171",
        "soft-peach": "#fff4ec",
        "aqua-green": "#04d4a4",
      },
    },
  },
  plugins: [],
};
