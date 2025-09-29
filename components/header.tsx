export default function Header() {
  return (
    <header style={{padding: '1rem', backgroundColor: '#20232a', color: 'white'}}>
      <h1>My Library</h1>
      <nav>
        <a href="/" style ={{marginRight: '1rem', color: '#61dafb'}}> Home </a>
        <a href="/about" style={{color: "#61dafb"}}>About</a>
      </nav>
      </header>
  );
}