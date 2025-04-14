import { useState, useEffect } from "react";

const LoanForm = () => {
  const [userId, setUserId] = useState("");
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/books");
      if (!res.ok) {
        throw new Error("Erro ao carregar os livros");
      }
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Erro ao buscar livros:", err);
      setError("Não foi possível carregar os livros.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/loans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userId,
          book: bookId,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Empréstimo registrado com sucesso!");
      } else {
        setMessage(`Erro: ${data.message}`);
      }
    } catch (err) {
      setMessage(`Erro ao registrar empréstimo: ${err.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📚 Registrar Empréstimo</h1>
      {loading && <p>Carregando livros...</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="ID do usuário"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          style={styles.input}
        />
        <select
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          required
          style={styles.input}
        >
          <option value="">Selecione um livro</option>
          {books.length > 0 ? (
            books.map((book) => (
              <option key={book._id} value={book._id}>
                {book.title}
              </option>
            ))
          ) : (
            <option disabled>Nenhum livro disponível</option>
          )}
        </select>
        <button type="submit" style={styles.button}>Registrar</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f7f9fc",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#004085",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "350px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "15px",
    width: "100%",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    transition: "0.3s",
    width: "100%",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "#28a745",
    fontSize: "18px",
  },
  errorMessage: {
    marginTop: "15px",
    color: "#dc3545",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default LoanForm;