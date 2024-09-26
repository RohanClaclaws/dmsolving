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
        // "radial":'radial-gradient(ellipse at 100% 40% ,red 4%,blue 60%)',
        "radial":" radial-gradient(ellipse at 50% 50%, rgba(158, 110, 230, 0.28) -10%, rgba(158, 110, 230, 0) 70%)",
        "radial2":" radial-gradient(ellipse at 50% 50%, #FA75F847 -10%, #FA75F800 70%)",
        "radial3":" radial-gradient(ellipse at 50% 50%, #FACC6947 -10%, #FACC6900 70%)",
        "radial4":" radial-gradient(ellipse at 50% 50%, #5CC3FA47 -10%, #5CC3FA00 70%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      screens: {
        'layout-sm': '425px',
        'input-collapse-contact': '678px',
        'xs': '460px',
        'arrows-services': '780px',
        'service-image-left-right-calc': '1447px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xs': '340px',
        'list-r-calc': '344px',
        'text-r-calc': '510px'
      },
      fontFamily: {
        // dmsans: ["DM Sans", 'sans'],
        dmsans: ['var(--font-dmsans)'],
        syne: ['var(--font-syne)']
      }

    },
    screens: {
      'home-md': { 'max': '768px' },
      'home-sm': { 'max': '425px' },
      'service-detail': { 'max': '680px' },
      'home-lg': '1268px',
      'home-4k': '1441px',
      'home-3k': { 'max': '1440px' },
      'pricing-lg': '1190px',
      'p-md': '1190px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'blur-r-hide': '1310px',

    }
  },
  plugins: [],
};
export default config;
