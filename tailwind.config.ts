import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: ["'Red Hat Mono Variable'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))",
        accent: "hsl(var(--accent))",
      },
    },
    animation: {
      reveal: "reveal 0.3s forwards ease-in-out",
      logo: "logo 1s forwards ease-out",
    },
    keyframes: {
      reveal: {
        "0%": {
          transform: "translateY(20px)",
          opacity: "0",
          filter: "blur(4px)",
        },
        "100%": {
          transform: "translateY(0px)",
          opacity: "1",
          filter: "blur(0px)",
        },
      },
      logo: {
        "0%": {
          transform: "translateY(200px)",
          color: "hsl(var(--primary))",
        },
        "100%": {
          transform: "translateY(0px)",
          color: "hsl(var(--secondary))",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
