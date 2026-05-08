import About from "@/components/about";
import ProjectsGrid from "@/components/grids/projects-grid";
import PublicationsGrid from "@/components/grids/publications-grid";
import ExperienceGrid from "@/components/grids/experience-grid";
import Stack from "@/components/grids/stack-grid";
import Puzzle from "@/components/puzzle/puzzle";

import { db } from "@/lib/db";
import { articles } from "@/drizzle/schema";
import { desc } from "drizzle-orm";

export const revalidate = 3600;

export async function generateStaticParams() {
  const article_slugs = await db
    .select({slug: articles.slug})
    .from(articles)
    .orderBy(desc(articles.createdAt))
    .limit(4);

  return article_slugs.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Home() {
  return (
    <>
      <About />
      <br />
      <ExperienceGrid />
      <br />
      <ProjectsGrid />
      <br />
      <PublicationsGrid />
      <br />
      <Stack />
      <br />
      <Puzzle />
    </>
  );
}
