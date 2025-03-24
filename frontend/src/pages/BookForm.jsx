import { useState } from "react";
import styled from "styled-components";

const BookForm = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    if (response.ok) {
      alert("Livro cadastrado com sucesso!");
      setBook({ title: "", author: "", genre: "", publishedYear: "", quantity: "" });
    } else {
      alert("Erro ao cadastrar o livro.");
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Cadastro de Livro</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Título</Label>
          <Input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />

          <Label>Autor</Label>
          <Input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />

          <Label>Gênero</Label>
          <Input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
          />

          <Label>Ano de Publicação</Label>
          <Input
            type="number"
            name="publishedYear"
            value={book.publishedYear}
            onChange={handleChange}
          />

          <Label>Quantidade</Label>
          <Input
            type="number"
            name="quantity"
            value={book.quantity}
            onChange={handleChange}
            required
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default BookForm;

// 🔹 ESTILIZAÇÃO COM STYLED-COMPONENTS 🔹
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
`;

const FormContainer = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin: 5px 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background: #45a049;
  }
`;