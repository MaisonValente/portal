import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx,json}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f5ef",
        midnight: "#0a0a0a",
        aurum: "#C8A96A"
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px rgba(200, 169, 106, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
