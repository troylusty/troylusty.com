import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://troylusty.com",
  integrations: [sitemap(), mdx(), tailwind(), icon()],
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
    },
    syntaxHighlight: false,
  },
  image: {
    service: passthroughImageService(),
  },
  build: {
    inlineStylesheets: "never",
  },
  experimental: {
    responsiveImages: true,
  },
});
