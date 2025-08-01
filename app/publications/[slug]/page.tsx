import pool from "@/lib/db";
import ArticleContent from "@/components/content";
import { notFound } from "next/navigation";
import { Article } from "@/lib/types";

export async function generateStaticParams() {
    const articles = await pool.query(`SELECT slug FROM articles WHERE published = true`);
    return articles.rows.map((article) => ({
        slug: article.slug,
    }));
}

export const revalidate = 3600;

export default async function RenderedPublication({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const query = await pool.query(`SELECT * FROM articles WHERE slug = $1`, [slug]);
    const article: Article = query.rows[0];

    if (!article) {
        notFound();
    }

    return (
        <div>
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/atom-one-dark.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"></link>
            <h1 className="dark:text-white text-lg font-semibold mb-2">{article.title}</h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">{article.created_at.toDateString()}</p>
            {!article.published && <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 italic">⚠️ This article is a work in progress and may contain errors.</p>}
            <hr className="my-4 h-0.5 border-t-0 bg-zinc-300 dark:bg-white/10" />
            <div className="flex flex-col gap-y-4 container mx-auto max-w-screen-xl dark:text-white [&_img]:mx-auto [&_h3]:underline [&_ul]:ml-3 [&_ul]:list-disc [&_a]:text-blue-400 [&_a]:hover:text-blue-600 [&>h1]:text-xl [&>h1]:font-bold [&>h2]:text-lg [&>h2]:font-semibold [&>p]:dark:text-zinc-300 [&>p]:text-zinc-600 [&_img]:rounded-md [&_code:not(.latex)]:border [&_code:not([class])]:text-sm [&_code:not(.latex)]:border-zinc-300 [&_code:not(.latex)]:dark:border-zinc-700">
                <ArticleContent content={article.content} />
            </div>
        </div>
    )
}