import Image from "next/image";

import Section from "../section";

function Technology({
  name,
  description,
  imageUrl,
  whiteBackground,
}: {
  name: string;
  description: string;
  imageUrl: string;
  whiteBackground?: boolean;
}) {
  const shouldWhiteBg = whiteBackground || false;
  return (
    <div className="flex flex-row items-center bg-zinc-100 dark:bg-zinc-800 rounded-none p-4 border border-zinc-300 dark:border-zinc-700">
      <Image
        src={imageUrl}
        alt={name}
        className={`w-auto h-16 mr-4 antialiase duration-200 ${shouldWhiteBg && "bg-zinc-300 rounded-full border-1"}`}
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
        />
        <Technology
          name="Rust"
          description="I do a lot of embedded development in Rust and also on the web using the Axum framework."
          imageUrl="/rust-lang.png"
        />
        <Technology
          name="TypeScript"
          description="I recently picked up TypeScript during my internship at Autumn. I plan on using it for my future general web development needs."
          imageUrl="/typescript.png"
        />
        <Technology
          name="Google JAX"
          description="I began experimenting with Google JAX and loved its NumPy-esque syntax and power to easily scale up numerical operations."
          imageUrl="/google-jax.png"
        />
        <Technology
          name="SystemVerilog"
          description="I've recently begun learning SystemVerilog in an effort to explore FPGA technology and Hardware Verification. I promise, its not a latch..."
          imageUrl="/systemverilog.svg"
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
