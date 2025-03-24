import { useState } from "react";

const BookList = () => {
  const [books] = useState([
    { id: 1, title: "O Senhor dos Anéis", author: "J.R.R. Tolkien" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Dom Casmurro", author: "Machado de Assis" }
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Livros</h1>
      <ul style={styles.list}>
        {books.map((book) => (
          <li key={book.id} style={styles.item}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  title: { fontSize: "24px", fontWeight: "bold" },
  list: { listStyle: "none", padding: 0 },
  item: { padding: "10px", borderBottom: "1px solid #ddd" }
};

export default BookList;