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
        offBlack: "var(--offBlack)",
        blancheWhite: "var(--blancheWhite)"
      },
      fontFamily: {
        "PPNeueMontreal": "var(--PPNeueMontreal)"
      },
      transitionProperty: {
        "yellowLinkHover": "var(--tarantinoYellow) 0.2s ease",
        "darkLinkHover": "var(--blancheWhite) 0.2s ease",
      }
    },
  },
  plugins: [],
};
export default config;
