import Link from "next/link";
import { Book } from "@/lib/book";

export default function BookCard({book}: {book: Book}) {
  return (
    <article style={{border: "1px solid #333", padding: "1rem", borderRadius: 8}}>
      <h3 style={{margin: 0}}> {book.title}</h3>
      <p style={{margin: "0.25rem 0 0.75rem"}}> {book.author}</p>
      <Link href={`/library/${book.slug}`}> Details</Link>
    </article>
  );
}