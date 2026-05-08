ALTER TABLE "articles" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "books" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "experience" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "puzzles" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "experience" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;--> statement-breakpoint
ALTER TABLE "experience" ALTER COLUMN "companyLink" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "content" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "image" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "link" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "link" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "puzzles" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;