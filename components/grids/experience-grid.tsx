import { Experience } from "@/lib/types";
import pool from "@/lib/db";
import { ExperienceCard } from "../cards";
import Section from "../section";

export const revalidate = 3600;

export async function generateStaticParams() {
  const experiences = await pool.query(
    `SELECT id FROM experience WHERE display = true ORDER BY id DESC`,
  );
  return experiences.rows.map((experience) => ({
    id: experience.id,
  }));
}

export default async function ExperienceGrid() {
  const query = await pool.query(
    `SELECT * FROM experience WHERE display = true ORDER BY id DESC`,
  );
  const experiences: Experience[] = query.rows;
  const gridCols = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
  }[experiences.length] || "md:grid-cols-1"

  return (
    <Section id="experience" name="Experience" moreInfo="/experience">
      <div className={`grid ${gridCols} gap-x-2 sm:grid-cols-1 gap-y-2`}>
        {experiences.map((experience: Experience) => (
          <ExperienceCard
            key={experience.id}
            position={experience.position}
            description={experience.description}
            company={experience.companyName}
            companyLink={experience.companyLink}
            startDate={experience.startedAt}
            endDate={experience.endedAt}
            companyLogo={experience.companyIcon}
          />
        ))}
      </div>
    </Section >
  );
}
