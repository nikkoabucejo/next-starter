import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./core/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
