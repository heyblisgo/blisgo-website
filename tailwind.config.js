/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
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
      },
      boxShadow: {
        dropdown: "0px 0px 4px rgba(0, 0, 0, 0.25)",
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
    themes: [
      {
        mytheme: {
          primary: "#EEEEDD",
          secondary: "#007630",
          accent: "#85CF6B",
          neutral: "#EEEEDD",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#5FC92E",
          warning: "#FFAD0D",
          error: "#DB2424",
        },
      },
    ],
  },
};
