"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import hljs from "highlight.js";
import rehypeKatex from "rehype-katex";

import { useEffect } from "react";

export default function ArticleContent({ content }: { content: string }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <Markdown children={content} remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} />
    )
}