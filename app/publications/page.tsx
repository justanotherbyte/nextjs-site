import { db } from "@/lib/db";
import Section from "@/components/section";
import { BlogCard } from "@/components/cards";
import { articles, type Article } from "@/drizzle/schema";
import { desc, eq } from "drizzle-orm";


export async function generateStaticParams() {
    const selected_articles = await db
        .select({slug: articles.slug})
        .from(articles)
        .where(eq(articles.published, true))
        .orderBy(desc(articles.createdAt))
        .limit(4);

    return selected_articles.map((article) => ({
        slug: article.slug,
    }));
}

export const revalidate = 3600;

export default async function Publications() {
    const selected_articles = await db
        .select()
        .from(articles)
        .where(eq(articles.published, true))
        .orderBy(desc(articles.createdAt))
        .limit(4);

    return (
        <Section id="publications" name="Publications">
            <div className="grid md:grid-cols-4 gap-x-2 sm:grid-cols-1 md:gap-y-0 gap-y-2">
                {selected_articles.map((article: Article) => (
                    <BlogCard key={article.slug} name={article.title} description={article.description} slug={article.slug} />
                ))}
            </div>
        </Section>
    )
}