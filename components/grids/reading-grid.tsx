import Section from "../section";
import { BookCard } from "../cards";
import { books, type Book } from "@/drizzle/schema";
import { db } from "@/lib/db";

export default async function ReadingGrid() {
  const all_books = await db
    .select()
    .from(books);

  return (
    <Section id="reading" name="Currently Reading">
      <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1">
        {all_books.map((book) => (
          <BookCard
            key={book.name}
            name={book.name}
            author={book.author}
            description={book.description}
            image={book.image}
            link={book.link}
          />
        ))}
      </div>
    </Section>
  );
}
