import { books } from "@/lib/books";
import BookCard from "@/components/bookCard";

export default function LibraryPage() {
  return(
    <main style={{padding: "2rem"}}>
      <h1>Library</h1>
      <div style={{display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr)))"}}>
        {books.map((b) => (
          <BookCard key={b.slug} book={b} />
        ))}
      </div>
    </main>
  );
}