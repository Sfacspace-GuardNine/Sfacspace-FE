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
          100: "var(--neutral-100)",
          90: "var(--neutral-90)",
          80: "var(--neutral-80)",
          70: "var(--neutral-70)",
          60: "var(--neutral-60)",
          50: "var(--neutral-50)",
          40: "var(--neutral-40)",
          30: "var(--neutral-30)",
          20: "var(--neutral-20)",
          10: "var(--neutral-10)",
          5: "var(--neutral-5)",
          white: "var(--neutral-white)",
        },
        primary: {
          500: "var(--primary-500)",
          400: "var(--primary-400)",
          300: "var(--primary-300)",
          200: "var(--primary-200)",
          100: "var(--primary-100)",
          50: "var(--primary-50)",
        },
        strokeLine: {
          blue: "var(--strokeLine-blue)",
          main10: "var(--strokeLine-main10)",
          main5: "var(--strokeLine-main5)",
        },
        background: {
          purpleLight: "var(--background-purpleLight)",
          purpleDark: "var(--background-purpleDark)",
          redLight: "var(--background-redLight)",
          grayLight: "var(--background-grayLight)",
          grayDark: "var(--background-grayDark)",
        },
        system: {
          warning: "var(--system-warning)",
          assist: "var(--system-assist)",
          suggest: "var(--system-suggest)",
          success: "var(--system-success)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
