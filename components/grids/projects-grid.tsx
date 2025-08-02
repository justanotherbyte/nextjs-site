"use client";

import Section from "../section";
import { useState, useEffect } from "react";
import { GitHubCard, SkeletonCard } from "../cards";

export default function ProjectsGrid() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const resp = await fetch(
        "https://pinned.berrysauce.dev/get/justanotherbyte",
      );
      const data = await resp.json();
      setRepos(data);
    };
    fetchRepos();
  }, []);

  return (
    <Section
      id="projects"
      name="Projects"
      moreInfo="https://github.com/justanotherbyte"
    >
      <div className="grid md:grid-cols-4 gap-x-2 sm:grid-cols-1 md:gap-y-0 gap-y-2">
        {repos.length > 0
          ? repos.map((repo: any) => (
              <GitHubCard
                key={repo.name}
                author={repo.author}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                languageColor={repo.languageColor}
                stars={repo.stars}
              />
            ))
          : Array(4)
              .fill(null)
              .map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </Section>
  );
}
