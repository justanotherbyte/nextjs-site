import Image from "next/image";

import Section from "../section";

function Technology({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="flex flex-row items-center bg-zinc-100 dark:bg-zinc-800 rounded-none p-4 border border-zinc-300 dark:border-zinc-700">
      <Image
        src={imageUrl}
        alt={name}
        className="w-auto h-16 mr-4 duration-200"
        width={200}
        height={200}
      />
      <div>
        <h3 className="text-lg font-bold dark:text-white">{name}</h3>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <Section id="stack" name="Stack">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
        <Technology
          name="Python"
          description="This is the language I'm the most proficient in. I do my Machine Learning and Data Science work in Python."
          imageUrl="/python.png"
        ></Technology>
        <Technology
          name="Rust"
          description="I do a lot of embedded development in Rust and also on the web using the Axum framework."
          imageUrl="/rust-lang.png"
        ></Technology>
        <Technology
          name="TypeScript"
          description="I recently picked up TypeScript during my internship at Autumn. I plan on using it for my future general web development needs."
          imageUrl="/typescript.png"
        ></Technology>
        <Technology
          name="Django"
          description="I've loved Django for a while now, and have used it in all my SSR web apps."
          imageUrl="/django.svg"
        />
        <Technology
          name="NextJS"
          description="NextJS is something I avoided for far too long. I started using it for my Autumn internship, and now it powers my personal website!"
          imageUrl="/nextjs.svg"
        />
        <Technology
          name="PostgreSQL"
          description="PostgreSQL is my database of choice for all of my recent projects, though I have begun to check out Convex."
          imageUrl="/postgres.png"
        />
      </div>
    </Section>
  );
}
