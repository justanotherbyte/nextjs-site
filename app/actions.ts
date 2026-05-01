'use server'

import { z } from 'zod'
import pool from '@/lib/db';
import { Puzzle } from '@/lib/types';

const schema = z.object({
    answer: z.string()
})

export async function checkAnswer(puzzleId: number, _: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        answer: formData.get("answer")
    });
    const query = await pool.query("SELECT answer FROM puzzles WHERE id = $1", [puzzleId]);
    const puzzle: Puzzle = query.rows.at(0);
    const answer = puzzle.answer;

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    return {
        answerCorrect: validatedFields.data.answer === answer,
        attempted: true
    }
}