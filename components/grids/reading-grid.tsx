import Section from "../section";
import { BookCard } from "../cards";
import { Book } from "@/lib/types";
import pool from "@/lib/db";

export default async function ReadingGrid() {
  const query = await pool.query(`SELECT * FROM books`);
  const books: Book[] = query.rows;

  return (
    <Section id="reading" name="Currently Reading">
      <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1">
        {books.map((book) => (
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
