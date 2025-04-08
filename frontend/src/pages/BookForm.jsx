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
        <Title>📚 Cadastro de Livro</Title>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f7f9fc;
`;

const FormContainer = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  color: #004085;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  width: 100%;
  outline: none;
  transition: 0.3s;

  &:focus {
    border: 1px solid #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;