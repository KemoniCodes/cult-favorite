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
        'filterHover': 'filter 0.2s ease',
        'radiusHover': 'border-radius 2s ease'
      },
      filter: {
        'grayscale-0': 'grayscale(0%)',
      },
      
    },
  },
  plugins: [],
};
export default config;
