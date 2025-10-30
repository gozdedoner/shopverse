/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 🌙 olmazsa dark mode hiç çalışmaz
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
