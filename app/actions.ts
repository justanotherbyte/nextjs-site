'use server'

import { z } from 'zod'
import { db } from '@/lib/db';
import { puzzles, type Puzzle } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

const schema = z.object({
    answer: z.string()
})

export async function checkAnswer(puzzleId: number, _: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        answer: formData.get("answer")
    });

    const [puzzle] = await db
        .select({answer: puzzles.answer})
        .from(puzzles)
        .where(eq(puzzles.id, puzzleId));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    return {
        answerCorrect: validatedFields.data.answer === puzzle.answer,
        attempted: true
    }
}