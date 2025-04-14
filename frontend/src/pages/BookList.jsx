import { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBookId, setEditingBookId] = useState(null);
  const [editedBook, setEditedBook] = useState({ title: "", author: "", available: true });

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEditClick = (book) => {
    setEditingBookId(book._id);
    setEditedBook({ ...book });
  };

  const handleSaveClick = async () => {
    try {
      await fetch(`http://localhost:5000/api/books/${editingBookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedBook),
      });
      setEditingBookId(null);
      fetchBooks();
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
      });
      fetchBooks();
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
  };

  const handleLoan = async (bookId) => {
    try {
      const res = await fetch("http://localhost:5000/api/loan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "USER_ID_HERE", bookId }),
      });

      if (res.ok) {
        fetchBooks(); // Atualiza a lista de livros após o empréstimo
      } else {
        console.error("Erro ao registrar empréstimo");
      }
    } catch (error) {
      console.error("Erro ao registrar empréstimo:", error);
    }
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
          <li key={book._id} style={styles.item}>
            {editingBookId === book._id ? (
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
                <div style={styles.status}>
                  {book.available ? "Disponível" : "Emprestado"}
                </div>
                <button onClick={handleSaveClick} style={styles.saveButton}>Salvar</button>
              </div>
            ) : (
              <>
                <strong style={styles.bookTitle}>{book.title}</strong>
                <span style={styles.author}> - {book.author}</span>
                <div style={styles.status}>
                  {book.status === "borrowed" ? "Emprestado" : "Disponível"}
                </div>
                <div style={styles.actions}>
                  {book.status === "available" && (
                    <button onClick={() => handleLoan(book._id)} style={styles.loanButton}>Emprestar</button>
                  )}
                  <button onClick={() => handleEditClick(book)} style={styles.editButton}>Editar</button>
                  <button onClick={() => handleDelete(book._id)} style={styles.deleteButton}>Excluir</button>
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
  saveButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  loanButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default BookList;