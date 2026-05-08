import { ExperienceCard } from "@/components/cards";
import Section from "@/components/section";
import { db } from "@/lib/db";
import { experience, type Experience } from "@/drizzle/schema";
import { desc } from "drizzle-orm";

export const revalidate = 3600;

export async function generateStaticParams() {
    const experiences = await db
        .select({id: experience.id})
        .from(experience)
        .orderBy(desc(experience.id));

    return experiences.map((experience) => ({
        id: experience.id,
    }));
}

export default async function Experience() {
    const experiences = await db
        .select()
        .from(experience)
        .orderBy(desc(experience.id));

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