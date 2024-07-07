const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      strokeWidth: {
        1: "1.5px",
        2: "2px",
      },
    },
    animation: {
      tilt: "tilt 10s infinite linear",
      blob: "blob 10s infinite",
    },
    keyframes: {
      tilt: {
        "0%, 50%, 100%": {
          transform: "rotate(0deg)",
        },
        "25%": {
          transform: "rotate(1.25deg)",
        },
        "75%": {
          transform: "rotate(-1.25deg)",
        },
      },
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
    },
  },
  plugins: [],
  // variants: {
  //   extend: {
  //     backgroundColor: ["group-hover"],
  //     gradientColorStops: ["group-hover"],
  //     textColor: ["group-hover"],
  //     scale: ["group-hover"],
  //     translate: ["group-hover, hover"],
  //     rotate: ["group-hover"],
  //     display: ["group-hover"],
  //     transitionProperty: ["group-hover"],
  //     transitionDuration: ["group-hover"],
  //     transitionTimingFunction: ["group-hover"],
  //     transitionDelay: ["group-hover"],
  //   },
  // },
};
