import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",   // you have files here too
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#F8F6F1",
        mid: "#6B6B6B",
        rule: "#D4D0C8",
        accent: "#1A3C5E",
        positive: "#1A5C3A",
        "positive-bg": "#EDFAF3",
      },
      fontFamily: {
        editorial: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;