/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: { "gmarket-sans": ["GmarketSans", "serif"] },
      fontSize: {
        display1: ["32px", "40px"],
        display2: ["24px", "32px"],
        display3: ["20px", "28px"],
        title1: ["18px", "22px"],
        title2: ["16px", "20px"],
        title3: ["14px", "18px"],
        body1: ["16px", "24px"],
        body2: ["14px", "22px"],
        body3: ["12px", "18px"],
        label1: ["14px", "20px"],
        label2: ["12px", "16px"],
        label3: ["11px", "16px"],
      },
      colors: {
        "primary-green": "#007630",
        "primary-beige": "#EEEEDD",
        "yellow-green": "#85CF6B",
        "dark-green": "#005924",
        success: "#5FC92E",
        warning: "#FFAD0D",
        error: "#DB2424",
        black: "#000000",
        darkgrey: {
          1: "#777777",
          2: "#555555",
          3: "#242424",
        },
        grey: {
          1: "#cccccc",
          2: "#999999",
        },
        lightgrey: {
          1: "#f9f9f9",
          2: "#f0f0f0",
          3: "#DDDDDD",
        },
        stackgrey: {
          1: "#E9E9E9",
          2: "#D9D9D9",
        },
        white: "#ffffff",
      },
      boxShadow: {
        searchbar: "inset 2px 2px 2px rgba(0, 0, 0, 0.25)",
        container: "4px 4px 20px rgba(140, 139, 162, 0.26), inset 0 4px 10px rgba(255, 255, 255, 0.3)",
        inner: "inset 0 4px 4px rgba(77, 76, 94, 0.3)",
        magenta: "0 4px 8px rgba(255, 95, 145, 0.4), inset 0 4px 10px #FF5F91",
        blue: "0 4px 8px rgba(117, 95, 255, 0.4), inset 0 4px 10px #434AFF",
        green: "0 4px 8px rgba(122, 230, 189, 0.4), inset 0 4px 10px #2AC093",
        purple: "0 4px 8px rgba(159, 38, 234, 0.49), inset 0 4px 10px #9C4EFF",
        500: "0 4px 8px rgba(57, 53, 81, 0.4), inset 0 4px 10px #1D1F31",
        200: "0 4px 8px rgba(57, 53, 81, 0.4), inset 0 4px 10px #8F93B0",
        footer: "4px -4px 50px rgba(140, 139, 162, 0.26)",
      },
      screens: {
        sm: "640px", //sm 이전 default - mobile
        md: "768px", //tablet
        lg: "1024px",
        xl: "1280px", // desktop
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: false,
  },
};
