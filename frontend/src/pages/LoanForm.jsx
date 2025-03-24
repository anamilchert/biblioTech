import { useState } from "react";

const LoanForm = () => {
  const [user, setUser] = useState("");
  const [book, setBook] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Empréstimo registrado para ${user} com o livro "${book}"`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Registrar Empréstimo</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nome do usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Nome do livro"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Registrar</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  title: { fontSize: "24px", fontWeight: "bold" },
  form: { display: "flex", flexDirection: "column", alignItems: "center" },
  input: { margin: "10px", padding: "10px", width: "80%", maxWidth: "300px" },
  button: { padding: "10px 20px", cursor: "pointer", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" },
  message: { marginTop: "15px", fontWeight: "bold" }
};

export default LoanForm;