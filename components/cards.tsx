"use client";

import Link from "next/link";

export function GitHubCard({
  author,
  name,
  description,
  language,
  languageColor,
  stars,
}: {
  author: string;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
}) {
  return (
    <div
      className="relative bg-zinc-100 dark:bg-zinc-800 rounded-none p-4 cursor-pointer border border-zinc-300 dark:border-zinc-700 active:opacity-75 duration-100"
      onClick={() => (location.href = `https://github.com/${author}/${name}`)}
    >
      <a
        className="dark:text-white"
        href={`https://github.com/${author}/${name}`}
      >
        <span className="text-zinc-500 text-xs">{author}/</span>
        {name}
      </a>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1 mb-6">
        {description}
      </p>

      <h3 className="absolute left-4 bottom-2" style={{ color: languageColor }}>
        {language}
      </h3>
      <h3 className="absolute right-4 bottom-2 dark:text-white">{stars} ⭐</h3>
    </div>
  );
}

export function BlogCard({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return (
    <Link
      href={`publications/${slug}`}
      className="bg-zinc-100 dark:bg-zinc-800 rounded-none p-4 cursor-pointer border border-zinc-300 dark:border-zinc-700 active:opacity-75 duration-100"
    >
      <div className="dark:text-white">{name}</div>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1">{description}</p>
    </Link>
  );
}

export function ExperienceCard({
  position,
  company,
  companyLink,
  startDate,
  endDate,
  companyLogo,
  description,
}: {
  position: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  companyLogo: string;
  description: string;
}) {
  return (
    <div className="flex flex-col bg-zinc-100 dark:bg-zinc-800 rounded-none p-4 border border-zinc-300 dark:border-zinc-700 gap-y-2">
      <div className="flex flex-row gap-x-3">
        <a href={companyLink} target="_blank">
          <img className="rounded-sm w-15 h-auto" src={companyLogo} />
        </a>
        <div>
          <a
            href={companyLink}
            target="_blank"
            className="dark:text-white hover:underline active:text-zinc-400 duration-200"
          >
            {position} @ {company}
          </a>

          <p className="text-zinc-400">
            {startDate} - {endDate}.
          </p>
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-y-2 bg-zinc-100 dark:bg-zinc-800 rounded-none p-4 cursor-pointer border border-zinc-300 dark:border-zinc-700 active:opacity-75 duration-100 ">
      <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"></div>
      <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"></div>
      <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"></div>
    </div>
  );
}

export function BookCard({
  name,
  author,
  description,
  image,
}: {
  name: string;
  author: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex flex-row bg-zinc-100 dark:bg-zinc-800 rounded-none border border-zinc-300 dark:border-zinc-700">
      <img className="w-35 h-auto" src={image} />
      <div className="flex flex-col p-4">
        <h3 className="text-zinc-900 dark:text-white">{name}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line text-sm">
          {author}
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}
