import { useEffect, useState } from "react";

const ReturnBookPage = () => {
  const [loans, setLoans] = useState([]);

  const fetchLoans = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/loans");
      const data = await response.json();
      setLoans(data);
    } catch (error) {
      console.error("Erro ao buscar empréstimos:", error);
    }
  };

  const handleReturn = async (loanId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/loan/return/${loanId}`, {
        method: "POST",
      });

      if (res.ok) {
        fetchLoans();
      } else {
        console.error("Erro ao devolver livro");
      }
    } catch (error) {
      console.error("Erro ao devolver livro:", error);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📥 Devolução de Livros</h1>
      <ul style={styles.list}>
        {loans.map((loan) => (
          <li key={loan._id} style={styles.item}>
            <div>
              <strong style={styles.bookTitle}>{loan.book.title}</strong> —{" "}
              <span style={styles.author}>{loan.book.author}</span>
            </div>
            <button onClick={() => handleReturn(loan._id)} style={styles.returnButton}>
              Devolver
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#eaf4ff",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "30px",
    color: "#004085",
  },
  list: {
    listStyle: "none",
    padding: 0,
    maxWidth: "600px",
    margin: "0 auto",
  },
  item: {
    backgroundColor: "#fff",
    padding: "15px 20px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookTitle: {
    fontSize: "18px",
    color: "#004085",
  },
  author: {
    fontSize: "16px",
    color: "#555",
  },
  returnButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ReturnBookPage;