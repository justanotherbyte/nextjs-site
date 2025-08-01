"use server";

import { BlogCard } from "../cards";
import Section from "../section";
import pool from "@/lib/db";
import { Article } from "@/lib/types";

export default async function PublicationsGrid() {
    const query = await pool.query(`SELECT * FROM articles WHERE published = true ORDER BY created_at DESC LIMIT 4`);
    const articles: Article[] = query.rows;

    return (
        <Section id="publications" name="Publications" moreInfo="/publications">
            <div className="grid md:grid-cols-4 gap-x-2 sm:grid-cols-1 md:gap-y-0 gap-y-2">
                {articles.map((article: Article) => (
                    <BlogCard key={article.slug} name={article.title} description={article.description} slug={article.slug} />
                ))}
            </div>
        </Section>
    )
}
