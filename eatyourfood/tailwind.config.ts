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
        background: "#004643",
        headline: "#fffffe",
        paragraph: "#abd1c6",
        button: "#f9bc60",
        buttonText: "#001e1d",
        stroke: "#001e1d",
        primary: "#e8e4e6",
        secondary: "#abd1c6",
        tertiary: "#e16162",
        highlight: "#f9bc60",
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
