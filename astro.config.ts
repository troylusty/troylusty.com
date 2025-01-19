import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://troylusty.com",
  integrations: [
    sitemap(),
    expressiveCode({
      themes: ["github-dark-default", "github-light-default"],
      defaultProps: {
        frame: "none",
        wrap: true,
      },
      styleOverrides: {
        frames: {
          shadowColor: "none",
        },
      },
    }),
    mdx(),
    tailwind(),
    icon(),
  ],
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
  },
  image: {
    service: passthroughImageService(),
  },
  experimental: {
    responsiveImages: true,
  },
});
