import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const posts = (await getCollection("posts")).filter(
    (post) => !post.data.draft,
  );

  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft,
  );

  const items = [...posts, ...projects].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
