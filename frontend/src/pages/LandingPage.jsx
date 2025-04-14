import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>📚 BiblioTech</h1>
        <div style={styles.buttonGroup}>
          <Link to="/login">
            <button style={styles.loginButton}>Login</button>
          </Link>
          <Link to="/register">
            <button style={styles.registerButton}>Cadastre-se</button>
          </Link>
        </div>
      </header>

      <main style={styles.content}>
        <h2 style={styles.title}>Organize sua biblioteca com facilidade</h2>
        <p style={styles.subtitle}>
          Gerencie seus livros, empréstimos e cadastros com apenas alguns cliques.
        </p>
        <Link to="/login">
          <button style={styles.ctaButton}>Começar Agora</button>
        </Link>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 BiblioTech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(to bottom, #eaf4ff, #ffffff)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    backgroundColor: "#004085",
    color: "#fff",
    padding: "20px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
  },
  logo: {
    margin: 0,
    fontSize: "26px",
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s",
  },
  registerButton: {
    backgroundColor: "#ffffff",
    color: "#007bff",
    border: "2px solid #007bff",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s",
  },
  content: {
    flex: 1,
    textAlign: "center",
    padding: "80px 20px",
  },
  title: {
    fontSize: "40px",
    color: "#004085",
    marginBottom: "20px",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "20px",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto 40px",
    lineHeight: "1.6",
  },
  ctaButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "16px 32px",
    fontSize: "18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
  footer: {
    backgroundColor: "#004085",
    color: "#fff",
    textAlign: "center",
    padding: "14px 0",
    fontSize: "14px",
  },
};

styles.loginButton[':hover'] = {
  backgroundColor: "#0056b3",
};
styles.registerButton[':hover'] = {
  backgroundColor: "#007bff",
  color: "#fff",
};

export default LandingPage;