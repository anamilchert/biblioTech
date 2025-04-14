import { useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", available: true },
    { id: 2, title: "1984", author: "George Orwell", available: false },
    { id: 3, title: "Dom Casmurro", author: "Machado de Assis", available: true }
  ]);

  const [editingBookId, setEditingBookId] = useState(null);
  const [editedBook, setEditedBook] = useState({ title: "", author: "", available: true });

  const handleEditClick = (book) => {
    setEditingBookId(book.id);
    setEditedBook({ ...book });
  };

  const handleSaveClick = () => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === editingBookId ? { ...editedBook } : book
      )
    );
    setEditingBookId(null);
  };

  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedBook((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Livros</h1>
      <ul style={styles.list}>
        {books.map((book) => (
          <li key={book.id} style={styles.item}>
            {editingBookId === book.id ? (
              <div>
                <input
                  type="text"
                  name="title"
                  value={editedBook.title}
                  onChange={handleChange}
                  style={styles.input}
                />
                <input
                  type="text"
                  name="author"
                  value={editedBook.author}
                  onChange={handleChange}
                  style={styles.input}
                />
                <label style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="available"
                    checked={editedBook.available}
                    onChange={handleChange}
                  />
                  Disponível
                </label>
                <button onClick={handleSaveClick} style={styles.saveButton}>Salvar</button>
              </div>
            ) : (
              <>
                <strong style={styles.bookTitle}>{book.title}</strong>
                <span style={styles.author}> - {book.author}</span>
                <div style={styles.status}>
                  {book.available ? " Disponível" : " Emprestado"}
                </div>
                <div style={styles.actions}>
                  <button onClick={() => handleEditClick(book)} style={styles.editButton}>Editar</button>
                  <button onClick={() => handleDelete(book.id)} style={styles.deleteButton}>Excluir</button>
                </div>
              </>
            )}
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
    backgroundColor: "#f0f8ff",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#004080",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    maxWidth: "500px",
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
    textAlign: "left",
  },
  bookTitle: {
    fontWeight: "bold",
    color: "#00264d",
  },
  author: {
    fontStyle: "italic",
    color: "#00509e",
    marginLeft: "5px",
  },
  status: {
    marginTop: "5px",
    fontSize: "14px",
    color: "#333",
  },
  actions: {
    marginTop: "10px",
  },
  editButton: {
    marginRight: "10px",
    backgroundColor: "#4682B4",
    color: "#000",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "8px",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  checkboxLabel: {
    fontSize: "14px",
    display: "block",
    marginBottom: "10px",
    color: "#004080",
  },
  saveButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default BookList;