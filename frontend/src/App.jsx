import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import LoanForm from "./pages/LoanForm";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/loan" element={<LoanForm />} />
      </Routes>
    </Router>
  );
}

export default App;