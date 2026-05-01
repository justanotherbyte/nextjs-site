'use client'

import { useActionState } from "react"
import Markdown from "react-markdown"
import Section from "../section"
import { checkAnswer } from "@/app/actions"
import { Puzzle } from "@/lib/types"

const initialState = {
    answerCorrect: false,
    attempted: false
}

export default function PuzzleForm({ puzzle }: { puzzle: Puzzle }) {
    const checkAnswerWithId = checkAnswer.bind(null, puzzle.id);
    const [state, formAction, pending] = useActionState(checkAnswerWithId, initialState);

    const copyInput = async () => {
        try {
            await navigator.clipboard.writeText(puzzle.input);
        } catch (err) {
            console.error("Failed to copy puzzle input:", err);
        }
    }

    return (
        <Section id="puzzle" name="Monthly Puzzle" description="A monthly puzzle you can solve with some programming! Inspired by AoC but themed to my interests!">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 space-x-2 space-y-2">
                <code className="bg-zinc-800 text-zinc-400 cursor-pointer break-words text-wrap" onDoubleClick={copyInput}>
                    {puzzle.input}
                </code>
                <div className="text-zinc-400 [&_p:not(:last-child)]:mb-2">
                    <Markdown children={puzzle.description} />
                </div>
            </div>
            <form className="flex gap-x-2 mt-2" action={formAction}>
                <input className="text-white outline-none focus:ring-none ring ring-zinc-600 w-full px-3" type="text" name="answer" />
                <button className="text-zinc-200 bg-blue-500 p-2 hover:bg-blue-600 disabled:bg-zinc-800" type="submit" disabled={pending}>Submit</button>
            </form>
            {!state.attempted ? null : (state.answerCorrect
                ? <p className="text-center text-emerald-200 mt-2">Congratulations! You got it correct!</p>
                : <p className="text-center text-rose-200 mt-2">Uh oh! Better luck next time!</p>
            )
            }
        </Section>
    )
}