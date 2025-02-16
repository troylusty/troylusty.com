import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://troylusty.com",
  integrations: [sitemap(), mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
    shikiConfig: {
      wrap: true,
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
});
