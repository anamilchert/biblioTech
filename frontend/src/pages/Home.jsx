import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bem-vindo ao BiblioTech</h1>
    
      <div style={styles.buttons}>
        <Link to="/books">
          <button style={styles.button}>Ir para Lista de Livros</button>
        </Link>
        <Link to="/loan">
          <button style={styles.button}>Registrar Empréstimo</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  title: { fontSize: "24px", fontWeight: "bold" },
  buttons: { marginTop: "20px" },
  button: { 
    padding: "10px 20px", 
    cursor: "pointer", 
    background: "#007bff", 
    color: "#fff", 
    border: "none", 
    borderRadius: "5px", 
    margin: "10px"
  }
};

export default Home;