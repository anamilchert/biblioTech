import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📚 Bem-vindo ao BiblioTech</h1>
      <p style={styles.subtitle}>Gerencie seus livros e empréstimos de forma simples!</p>

      <div style={styles.buttons}>
        <Link to="/books">
          <button style={styles.button}>📖 Lista de Livros</button>
        </Link>
        <Link to="/loan">
          <button style={styles.button}>🔄 Registrar Empréstimo</button>
        </Link>
        <Link to="/book-form">
          <button style={styles.button}>➕ Cadastrar Novo Livro</button>
        </Link>
      </div>
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
    backgroundColor: "#f0f8ff" 
  },
  title: { 
    fontSize: "32px", 
    fontWeight: "bold", 
    color: "#004085", 
    marginBottom: "10px" 
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  },
  buttons: { 
    display: "flex", 
    flexDirection: "column", 
    gap: "15px", 
    width: "100%", 
    maxWidth: "300px" 
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
  }
};

styles.button[":hover"] = {
  background: "#0056b3"
};

export default Home;