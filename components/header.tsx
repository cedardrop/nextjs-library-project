import Link from "next/link";

export default function Header() {
  return (
    <header style={{padding: '1rem', backgroundColor: '#20232a', color: 'white'}}>
      <h1>My Library</h1>
      <nav>
        <Link href="/" style={{marginRight: "1rem"}}> Home </Link>
        <Link href="/about" style={{marginRight: "1rem"}}> About </Link>
        <Link href="/library"> Library </Link>
      </nav>
      </header>
  );
}