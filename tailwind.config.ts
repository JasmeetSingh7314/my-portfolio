import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "me-with-himalayas": "url('/assets/photos/Himalayas.jpg')",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        smaller: "1280px",
        medium: "1700px",
        extra: "1900px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("tailwind-scrollbar")({
      preferredStrategy: "pseudoelements",
    }),
  ],
};
export default config;
