import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "Troy Lusty",
  DESCRIPTION:
    "Hi, my name is Troy and I’m a student 3D artist studying on a BA (Hons) Game Arts and Design course in the UK.",
  EMAIL: "hello@troylusty.com",
  KEYWORDS: [
    "troy",
    "lusty",
    "troylusty",
    "portfolio",
    "3d",
    "design",
    "graphics",
    "blender",
    "photoshop",
    "davinci",
    "resolve",
    "unreal",
    "engine",
    "godot",
    "games",
  ],
  AUTHOR: "Troy Lusty",
  LINKS: [
    {
      name: "RSS feed",
      href: "/rss.xml",
      icon: "mdi:rss",
    },
    {
      name: "Sitemap",
      href: "/sitemap-index.xml",
      icon: "mdi:sitemap",
    },
    {
      name: "Email",
      href: "mailto:hello@troylusty.com",
      icon: "mdi:email",
    },
    {
      name: "GitHub",
      href: "https://github.com/troylusty",
      icon: "mdi:github",
    },
    {
      name: "Steam developer",
      href: "https://store.steampowered.com/developer/troy",
      icon: "mdi:steam",
    },
  ],
  NAVLINKS: [
    {
      name: "home",
      href: "/",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "posts",
      href: "/posts",
    },
    {
      name: "curriculum vitae",
      href: "/cv",
    },
  ],
};

export const HOME: Metadata = {
  TITLE: "Troy Lusty",
  DESCRIPTION:
    "Hi, my name is Troy and I'm a student 3D artist currently studying in my second year of an FdA Games and Interactive Design course in the UK.",
  HOMESETTINGS: {
    NUM_POSTS_ON_HOMEPAGE: 2,
    NUM_PROJECTS_ON_HOMEPAGE: 6,
  },
};

export const CV: Metadata = {
  TITLE: "Troy Lusty",
  DESCRIPTION: "Curriculum vitae.",
};

export const POSTS: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};
