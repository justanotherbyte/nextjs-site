import { ArrowRight } from "lucide-react";

export default function Section({
  id,
  name,
  moreInfo,
  description,
  children,
}: {
  id: string;
  name: string;
  moreInfo?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <div className="relative flex w-full">
        <h1 className="dark:text-white text-xl">{name}</h1>
        {moreInfo && (
          <a
            href={moreInfo}
            className="dark:text-white absolute right-0 text-xl hover:text-zinc-400 duration-200 transition"
          >
            View All <ArrowRight className="inline" />
          </a>
        )}
      </div>
      <hr className="my-4 h-0.5 border-t-0 bg-zinc-300 dark:bg-white/10" />
      {description && (
        <p className="text-zinc-600 dark:text-zinc-400 mt-1 mb-6">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
