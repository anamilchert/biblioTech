import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <input style={styles.input} type="text" placeholder="Usuário" />
      <input style={styles.input} type="password" placeholder="Senha" />
      <button style={styles.button} onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#eaf4ff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    fontSize: "28px",
    color: "#004085",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;