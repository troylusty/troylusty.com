export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  KEYWORDS: Array<string>;
  AUTHOR: string;
  LINKS: Array<{ name: string; href: string; icon: string }>;
  NAVLINKS: Array<{ name: string; href: string }>;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
  HOMESETTINGS?: {
    NUM_POSTS_ON_HOMEPAGE: number;
    NUM_PROJECTS_ON_HOMEPAGE: number;
  };
};
