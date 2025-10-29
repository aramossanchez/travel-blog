import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./organisms/**/*.{js,ts,jsx,tsx,mdx}",
    "./molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundSecondary: "var(--foregroundSecondary)",
        primaryColor: "var(--primaryColor)",
      },
    },
  },
  plugins: [],
} satisfies Config;
