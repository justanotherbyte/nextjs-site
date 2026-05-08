import { pgTable, unique, bigint, text, boolean, timestamp, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"
import { type InferSelectModel } from "drizzle-orm";

export const category = pgEnum("Category", ['Projects', 'Industry', 'Non-technical'])


export const experience = pgTable("experience", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "experience_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	startedAt: text().notNull(),
	endedAt: text().notNull(),
	description: text().notNull(),
	companyName: text().notNull(),
	companyIcon: text().notNull(),
	position: text().notNull(),
	companyLink: text().notNull(),
	display: boolean().default(false).notNull(),
}, (table) => [
	unique("experience_id_key").on(table.id),
]);

export const articles = pgTable("articles", {
	slug: text().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'date' }).defaultNow().notNull(),
	description: text().notNull(),
	content: text().notNull(),
	title: text().notNull(),
	category: category().default('Projects').notNull(),
	published: boolean().default(true).notNull(),
}, (table) => [
	unique("articles_slug_key").on(table.slug),
]);

export const books = pgTable("books", {
	name: text().primaryKey().notNull(),
	author: text().notNull(),
	description: text().notNull(),
	image: text().notNull(),
	link: text().notNull(),
});

export const puzzles = pgTable("puzzles", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "puzzles_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	name: text().notNull(),
	input: text().notNull(),
	description: text().notNull(),
	answer: text().notNull(),
});

export type Article = InferSelectModel<typeof articles>;
export type Book = InferSelectModel<typeof books>;
export type Experience = InferSelectModel<typeof experience>;
export type Puzzle = InferSelectModel<typeof puzzles>;