import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#fef6e4",
        headline: "#001858",
        paragraph: "#172c66",
        button: "#f582ae",
        buttonText: "#001858",
        stroke: "#001858",
        primary: "#f3d2c1",
        secondary: "#8bd3dd",
        tertiary: "#f582ae",
        highlight: "#fef6e4",
      },
      fontSize: {
        title1: "3rem",
        title2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
