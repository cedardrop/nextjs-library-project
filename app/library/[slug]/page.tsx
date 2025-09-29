import { books } from "@/lib/books";

type Props = {params: {slug: string}};

export default function BookDetailsPage({params}: Props) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) {
    return (
      <main style={{padding: "2rem", textAlign: "center"}}>
        <h1>Not Found</h1>
        <p>No book with slug: {params.slug}</p>
      </main>
    );
  }

return (
    <main style={{padding: "2rem", textAlign: "center"}}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong>{book.author}</p>
      <p><strong>Slug:</strong>{book.slug}</p>
    </main>
  );
}