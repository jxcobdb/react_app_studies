/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#502000",
        "light-brown": "#8D3800",
        "button-dark": "#341400",
        "button-light": "#522000",
        "nav-dark": "#341400",
        "nav-light": "#471B00",
      },
    },
  },
  plugins: [],
};
