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
        background: "#faeee7",
        headline: "#33272a",
        paragraph: "#594a4e",
        button: "#ff8ba7",
        buttonText: "#33272a",
        stroke: "#33272a",
        primary: "#fffffe",
        secondary: "#ffc6c7",
        tertiary: "#c3f0ca",
        highlight: "#ff8ba7",
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
