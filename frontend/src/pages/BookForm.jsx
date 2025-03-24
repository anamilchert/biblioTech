import { useState } from "react";
import axios from "axios";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    quantity: "",
  });

  // Atualizar os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submeter o formulário para criar um livro
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title: formData.title,
      author: formData.author,
      genre: formData.genre,
      publishedYear: formData.publishedYear,
      quantity: formData.quantity,
    };

    try {
      const response = await axios.post("http://localhost:5000/books", bookData);
      alert("Livro cadastrado com sucesso!");
      // Limpar o formulário após o envio
      setFormData({
        title: "",
        author: "",
        genre: "",
        publishedYear: "",
        quantity: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar o livro", error);
      alert("Erro ao cadastrar o livro");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Cadastrar Livro</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="author">Autor</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="genre">Gênero</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="publishedYear">Ano de Publicação</label>
          <input
            type="number"
            id="publishedYear"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Cadastrar Livro
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: "20px" },
  form: { display: "flex", flexDirection: "column", maxWidth: "400px", margin: "0 auto" },
  formGroup: { marginBottom: "15px" },
  button: { padding: "10px", cursor: "pointer", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" },
};

export default BookForm;