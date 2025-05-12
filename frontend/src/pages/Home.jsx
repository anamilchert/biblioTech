import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2 style={styles.logo}>BiblioTech</h2>
      </header>

      <main style={styles.container}>
        <h1 style={styles.title}>📚 Bem-vindo ao BiblioTech</h1>
        <p style={styles.subtitle}>
          Gerencie seus livros e empréstimos de forma simples!
        </p>

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
          <Link to="/return">
           <button style={styles.button}>📥 Devolver Livro</button>
         </Link>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 BiblioTech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#eaf4ff",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#004085",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
  },
  loginButton: {
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    margin: "20px auto",
    width: "90%",
    maxWidth: "600px",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#004085",
    marginBottom: "10px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "300px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    transition: "background 0.3s",
    width: "100%",
  },
  footer: {
    backgroundColor: "#004085",
    color: "#fff",
    textAlign: "center",
    padding: "12px 0",
  },
};

export default Home;