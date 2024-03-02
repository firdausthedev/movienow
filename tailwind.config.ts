import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        dark: "#00050d",
        gray: "#aaaaaa",
        darkBlue: "#191e25",
        charcoal: "#33373d",
      },
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
      },
      fontSize: {
        semiXl: "1.125rem", // 18px
      },
    },
  },
  plugins: [],
};
export default config;
