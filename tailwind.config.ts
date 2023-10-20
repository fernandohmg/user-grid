import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #FF512F 0%, #F09819 100%)",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(260px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
