/** @type {import('tailwindcss').Config} */
export default {
  base: "/boat",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#B8F4E8",
        backgroundColor: "#E45365",
      },
    },
  },
  plugins: [],
};
