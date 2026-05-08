import { ExperienceCard } from "../cards";
import Section from "../section";
import { db } from "@/lib/db";
import { experience, type Experience } from "@/drizzle/schema";
import { eq, desc } from "drizzle-orm";

export const revalidate = 3600;

export async function generateStaticParams() {
  const experiences = await db.select({id: experience.id}).from(experience).where(eq(experience.display, true)).orderBy(desc(experience.id));
  return experiences.map((e) => ({
    id: e.id
  }))
}

export default async function ExperienceGrid() {
  const experiences = await db.select().from(experience).where(eq(experience.display, true)).orderBy(desc(experience.id));
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
