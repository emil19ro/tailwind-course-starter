/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  safelist: [{ pattern: /^btn-/ }],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)"
          },
          "50%": {
            transform: "scaleY(1.5)"
          }
        }
      },
      animation: {
        wavey: "wavey 1000ms linear infinite"
      },
    }
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
    require("./plugins/outlineSolid"),
    require("./plugins/tableCaption"),
    require("./plugins/buttonPlugin"),
  ],
};
