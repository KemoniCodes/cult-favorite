import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tarantinoYellow: "var(--tarantinoYellow)",
        offBlack: "var(--offBlack)"
      },
      fontFamily: {
        "PPNeueMontreal": "var(--PPNeueMontreal)"
      },
    },
  },
  plugins: [],
};
export default config;
