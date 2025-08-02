import { Experience } from "@/lib/types";
import pool from "@/lib/db";
import { ExperienceCard } from "../cards";
import Section from "../section";

export const revalidate = 3600;

export async function generateStaticParams() {
  const experiences = await pool.query(
    `SELECT id FROM experience ORDER BY id DESC LIMIT 1`,
  );
  return experiences.rows.map((experience) => ({
    id: experience.id,
  }));
}

export default async function ExperienceGrid() {
  const query = await pool.query(
    `SELECT * FROM experience ORDER BY id DESC LIMIT 1`,
  );
  const experiences: Experience[] = query.rows;

  return (
    <Section id="experience" name="Experience" moreInfo="/experience">
      <div className="grid md:grid-cols-1 gap-x-2 sm:grid-cols-1 md:gap-y-0 gap-y-2">
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
    </Section>
  );
}
