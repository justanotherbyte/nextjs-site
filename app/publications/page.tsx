import pool from "@/lib/db";
import Section from "@/components/section";
import { BlogCard } from "@/components/cards";
import { Article } from "@/lib/types";

export async function generateStaticParams() {
    const articles = await pool.query(`SELECT slug FROM articles WHERE published = true ORDER BY created_at DESC LIMIT 4`);
    return articles.rows.map((article) => ({
        slug: article.slug,
    }));
}

export const revalidate = 3600;

export default async function Publications() {
    const articleQuery = await pool.query(`SELECT * FROM articles WHERE published = true ORDER BY created_at DESC LIMIT 4`);
    const articles: Article[] = articleQuery.rows;

    return (
        <Section id="publications" name="Publications">
            <div className="grid md:grid-cols-4 gap-x-2 sm:grid-cols-1 md:gap-y-0 gap-y-2">
                {articles.map((article: Article) => (
                    <BlogCard key={article.slug} name={article.title} description={article.description} slug={article.slug} />
                ))}
            </div>
        </Section>
    )
}