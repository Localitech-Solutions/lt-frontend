import type { Config } from "tailwindcss";
import flowbite  from "flowbite-react/tailwind";
import plugin from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebas": ['Bebas'],
        "century-gothic": ['Century Gothic']
      },
      backgroundImage: {
        'logo': "url('https://clipart-library.com/images/pT5oRXy6c.png')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionProperty: {
        height: 'height',
        opacity: 'opacity',
        margin: 'margin',
        slideIn: 'slideIn',
        transform: 'transform'
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1'}
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards",
        carousel: 'marquee 60s linear infinite',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
} satisfies Config;
