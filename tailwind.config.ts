import { Syne } from "next/font/google";
import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'layout-sm':'425px',
        'input-collapse-contact':'678px',
        'xs':'460px',
        'arrows-services':'780px',
        'service-image-left-right-calc':'1447px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xs':'340px'
      },
      fontFamily: {
        dmsans: ["DM Sans", 'sans'],
        syne:["Syne","sans-serif"]
      }

    },
    screens: {
      'home-md': {'max': '768px'},
      'home-sm': {'max': '425px'},
      'home-lg': '1268px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
export default config;
