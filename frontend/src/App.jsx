import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookForm from "./pages/BookForm";  // Importe o componente BookForm

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-form" element={<BookForm />} /> {/* Rota para o formulário de cadastro de livro */}
      </Routes>
    </Router>
  );
}

export default App;