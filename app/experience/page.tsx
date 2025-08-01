import { ExperienceCard } from "@/components/cards";
import Section from "@/components/section";
import pool from "@/lib/db";
import type { Experience } from "@/lib/types";

export const revalidate = 3600;

export async function generateStaticParams() {
    const experiences = await pool.query(`SELECT id FROM experience ORDER BY id DESC`);
    return experiences.rows.map((experience) => ({
        id: experience.id,
    }));
}

export default async function Experience() {
    const query = await pool.query(`SELECT * FROM experience ORDER BY id DESC`);
    const experiences: Experience[] = query.rows;

    return (
        <Section id="experience" name="Experience">
            <div className="flex flex-col gap-y-2">
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
    )
}