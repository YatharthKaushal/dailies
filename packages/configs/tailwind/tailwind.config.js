module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "base-100": "#1e212b",
        "base-200": "#191b24",
        "base-300": "#13161d",
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#004bff",

          "primary-content": "#cde0ff",

          secondary: "#009600",

          "secondary-content": "#000800",

          accent: "#005dff",

          "accent-content": "#cfe2ff",

          neutral: "#110003",

          "neutral-content": "#cbc3c4",

          "base-100": "#fafeef",

          "base-200": "#d9ddd0",

          "base-300": "#babdb1",

          "base-content": "#151614",

          info: "#009cab",

          "info-content": "#00090b",

          success: "#00a46f",

          "success-content": "#000a04",

          warning: "#9c5e00",

          "warning-content": "#ecded0",

          error: "#ed3e51",

          "error-content": "#140102",
        },
        dark: {
          primary: "#00cede",

          "primary-content": "#000f12",

          secondary: "#00acff",

          "secondary-content": "#000b16",

          accent: "#0000ff",

          "accent-content": "#c6dbff",

          neutral: "#110b1f",

          "neutral-content": "#c9c8cd",

          "base-100": "#1e212b",

          "base-200": "#191b24",

          "base-300": "#13161d",

          "base-content": "#cdcdd0",

          info: "#0084db",

          "info-content": "#000611",

          success: "#009c5b",

          "success-content": "#000903",

          warning: "#d08e00",

          "warning-content": "#100700",

          error: "#ff1d51",

          "error-content": "#160002",
        },
      },
    ],
  },
};
