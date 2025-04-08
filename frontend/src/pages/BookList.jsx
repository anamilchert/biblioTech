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
            <strong style={styles.bookTitle}>{book.title}</strong>
            <span style={styles.author}> - {book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f0f8ff", // Azul claro suave
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#004080", // Azul escuro
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  item: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
    fontSize: "18px",
    color: "#003366",
  },
  bookTitle: {
    fontWeight: "bold",
    color: "#00264d",
  },
  author: {
    fontStyle: "italic",
    color: "#00509e",
  },
};

export default BookList;