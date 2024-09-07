import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#030303",
          90: "#1A1A1A",
          80: "#333333",
          70: "#4D4D4D",
          60: "#4D4D4D",
          50: "#808080",
          40: "#999999",
          30: "#B3B3B3",
          20: "#CCCCCC",
          10: "#E6E6E6",
          5: "#F3F3F3",
          white: "#FFFFFF",
        },
        primary: {
          500: "#6100FF",
          400: "#883EFF",
          300: "#A66FFF",
          200: "#C9A8FF",
          100: "#E0CEFF",
          50: "#F2EBFF",
        },
        strokeLine: {
          blue: "#99BDFF",
          main10: "#E6E6E6",
          main5: "#F3F3F3",
        },
        background: {
          purpleLight: "#FAF8FF",
          purpleDark: "#E3E1E7",
          redLight: "#FFEFEF",
          grayLight: "#F1F1F1",
          grayDark: "#C2C2C2",
        },
        system: {
          warning: "#FF6D6D",
          assist: "#6DB0FF",
          suggest: "#FFD542",
          success: "#00C308",
        },
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      backgroundImage: {
        "concentric-circles": "url('/images/concentric-circles.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
