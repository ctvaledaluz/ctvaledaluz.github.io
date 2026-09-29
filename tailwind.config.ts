import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          500: "#0d9488",
          600: "#0f766e",
          700: "#0f5f58",
          900: "#134e4a",
        },
      },
      fontFamily: {
        heading: ["var(--font-open-sans)", "sans-serif"],
        body: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
