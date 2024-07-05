/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxl: { max: "1600px" },
      xl: { max: "1200px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "600px" },
      sms: { max: "530px" },
      xs: { max: "400px" },
    },
    colors: {
      transparent: "transparent",
      red: "#FF5577",
      white: "#ffffff",
      black: "#000",
      blue: "#4783FD",
      border: "#F0F0F0",
      bgGray: "#f1f5f9",
      text: "#0F0F11",
      form: "#212121",
      main: "#FAF9FB",
      gray: "#64748b",
    },
    fontFamily: {
      main: "Plus Jakarta Sans",
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  plugins: [],
};
