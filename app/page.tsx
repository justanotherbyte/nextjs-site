import About from "@/components/about";
import ProjectsGrid from "@/components/grids/projects-grid";
import PublicationsGrid from "@/components/grids/publications-grid";
import ExperienceGrid from "@/components/grids/experience-grid";
import Stack from "@/components/grids/stack-grid";

import pool from "@/lib/db";

export const revalidate = 3600;

export async function generateStaticParams() {
  const articles = await pool.query(
    `SELECT slug FROM articles ORDER BY created_at DESC LIMIT 4`,
  );
  return articles.rows.map((article) => ({
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
    </>
  );
}
