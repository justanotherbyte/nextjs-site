import PuzzleForm from "./form";
import { db } from "@/lib/db";
import { puzzles } from "@/drizzle/schema";
import { desc } from "drizzle-orm";

export const revalidate = 3600;

export default async function Puzzle() {
    const { id, name, input, description } = puzzles;
    const [puzzle] = await db.select({ id, name, input, description })
        .from(puzzles)
        .orderBy(desc(puzzles.id))
        .limit(1);

    return (
        <PuzzleForm puzzle={puzzle} />
    )
}