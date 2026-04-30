import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        cloud: "#F7F9FC",
        teal: "#12B8A6",
        coral: "#FF6B5F",
        iris: "#605BFF"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 24, 40, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
