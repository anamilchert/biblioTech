import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookForm from "./pages/BookForm";
import BookList from "./pages/BookList";
import LoanForm from "./pages/LoanForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-form" element={<BookForm />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/loan" element={<LoanForm />} />
      </Routes>
    </Router>
  );
}

export default App;