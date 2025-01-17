import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Outfit Variable'", ...defaultTheme.fontFamily.sans],
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
      logo: "logo 0.5s forwards ease-out",
      "gradient-x": "gradient-x 6s ease infinite",
      "gradient-y": "gradient-y 6s ease infinite",
      "gradient-xy": "gradient-xy 6s ease infinite",
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
          transform: "translateY(100%)",
          color: "hsl(var(--primary))",
        },
        "100%": {
          transform: "translateY(0%)",
          color: "hsl(var(--secondary))",
        },
      },
      "gradient-y": {
        "0%, 100%": {
          "background-size": "400% 400%",
          "background-position": "center top",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "center center",
        },
      },
      "gradient-x": {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
      "gradient-xy": {
        "0%, 100%": {
          "background-size": "400% 400%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
