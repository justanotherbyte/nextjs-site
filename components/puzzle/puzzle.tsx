import PuzzleForm from "./form";
import { Puzzle as PuzzleT } from "@/lib/types";
import pool from "@/lib/db";

export const revalidate = 3600;

export default async function Puzzle() {
    const query = await pool.query("SELECT id, name, input, description FROM puzzles ORDER BY id DESC LIMIT 1");
    const puzzle: PuzzleT = query.rows.at(0);
    return (
        <PuzzleForm puzzle={puzzle} />
    )
}