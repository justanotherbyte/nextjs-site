"use server";

import { BlogCard } from "../cards";
import Section from "../section";
import { db } from "@/lib/db";
import { articles, type Article } from "@/drizzle/schema";
import { eq, desc } from "drizzle-orm";


export default async function PublicationsGrid() {
  const all_articles = await db
    .select()
    .from(articles)
    .where(eq(articles.published, true))
    .orderBy(desc(articles.createdAt))
    .limit(4);

  return (
    <Section id="publications" name="Publications" moreInfo="/publications">
      <div className="grid md:grid-cols-4 gap-x-2 sm:grid-cols-1 md:gap-y-0 gap-y-2">
        {all_articles.map((article: Article) => (
          <BlogCard
            key={article.slug}
            name={article.title}
            description={article.description}
            slug={article.slug}
          />
        ))}
      </div>
    </Section>
  );
}
