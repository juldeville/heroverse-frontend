import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heroYellow: "var(--heroYellow)",
        heroBlack: "var(--heroBlack)",
        heroGray: "var(--heroGray)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  plugins: [],
} satisfies Config;
