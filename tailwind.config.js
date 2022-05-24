module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    screens: {
      sm: "100px",
      // => @media (min-width: 640px) { ... }

      md: "1150px",
      // => @media (min-width: 768px) { ... }

      lg: "1600px",
      // => @media (min-width: 1024px) { ... }

      xl: "1480px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#BF8DCD",
      white: "#FFFFFF",
      gray: "#F2F2F2",
      darkgray: "#6c757d",
      lightPrimary: "#C3F9ED",
      secondary: "#1DC8E2",
      lightSecondary: "#C3f9ED",
      white: "#FFFFFF",
      black: "#00000",
      gray: "#7A7A7A",
      lightgray: "#F3F3F3",
      parrot: "#92CC3E",
      darkGray: "#555555",
      gitHub: "#2D2D2D",
      borderGray: "#cbd4cd",
      button: "#A2E637",
      lime: "#7DFF7D",
      red: "#BF0F00",
      black: "#000000",
      warning: "#E6CF37",
      purple: "#ea80ff",
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: { "fade-in-down": "fade-in-down 0.5s ease-out" },
      height: {
        banner: "55rem",
        bannerItem: "45rem",
        image: "30rem",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
