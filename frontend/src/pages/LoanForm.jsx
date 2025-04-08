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
      <h1 style={styles.title}>📚 Registrar Empréstimo</h1>
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
  container: { 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    height: "100vh", 
    backgroundColor: "#f7f9fc" 
  },
  title: { 
    fontSize: "28px", 
    fontWeight: "bold", 
    color: "#004085", 
    marginBottom: "20px" 
  },
  form: { 
    display: "flex", 
    flexDirection: "column", 
    gap: "15px", 
    width: "100%", 
    maxWidth: "350px" 
  },
  input: { 
    padding: "12px", 
    fontSize: "16px", 
    borderRadius: "5px", 
    border: "1px solid #ddd", 
    marginBottom: "15px",
    width: "100%",
    outline: "none",
    transition: "0.3s"
  },
  inputFocus: { 
    border: "1px solid #007bff", 
    boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)"
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
    width: "100%"
  },
  buttonHover: {
    background: "#0056b3"
  },
  message: { 
    marginTop: "15px", 
    fontWeight: "bold", 
    color: "#28a745", 
    fontSize: "18px"
  }
};

styles.button[":hover"] = styles.buttonHover;
styles.input[":focus"] = styles.inputFocus;

export default LoanForm;