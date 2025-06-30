import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import BookForm from "./pages/BookForm";
import BookList from "./pages/BookList";
import LoanForm from "./pages/LoanForm";
import ReturnBookPage from "./pages/ReturnBook";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book-form" element={<BookForm />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/loan" element={<LoanForm />} />
        <Route path="/loan/return" element={<ReturnBookPage />}/>
      </Routes>
    </Router>
  );
}

export default App;