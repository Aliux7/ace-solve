import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ppneue: ["PP Neue Montreal", "sans-serif"],
        geist: ["var(--font-geist-sans)"],
        helveticaLight: ['"Helvetica Neue Cyr Light"', "sans-serif"],
        helveticaRoman: ['"Helvetica Neue Cyr Roman"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        invertedCorner: "-10px -10px 0 #FFF",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        reverseFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "reverse-float": "reverseFloat 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
