const Loan = require('../models/loan');
const Book = require('../models/book');

const createLoan = async (req, res) => {
  const { user, book } = req.body;

  try {
    const bookExists = await Book.findById(book);

    if (!bookExists || !bookExists.available) {
      return res.status(400).json({ message: 'Livro indisponível para empréstimo.' });
    }

    const newLoan = new Loan({ user, book });
    await newLoan.save();

    bookExists.available = false;
    await bookExists.save();

    return res.status(201).json({ message: 'Empréstimo registrado com sucesso!' });
  } catch (err) {
    console.error('Erro ao registrar empréstimo:', err);
    return res.status(500).json({ message: 'Erro ao registrar o empréstimo.' });
  }
};

const returnLoan = async (req, res) => {
  const { loanId } = req.params;

  try {
    const loan = await Loan.findById(loanId).populate('book');
    if (!loan) {
      return res.status(404).json({ message: 'Empréstimo não encontrado.' });
    }

    const book = await Book.findById(loan.book._id);
    if (book) {
      book.available = true;
      await book.save();
    }

    await Loan.findByIdAndDelete(loanId);

    return res.status(200).json({ message: 'Livro devolvido com sucesso!' });
  } catch (err) {
    console.error('Erro ao devolver livro:', err);
    return res.status(500).json({ message: 'Erro ao devolver livro.' });
  }
};

const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate('book');
    res.status(200).json(loans);
  } catch (err) {
    console.error('Erro ao buscar empréstimos:', err);
    res.status(500).json({ message: 'Erro ao buscar empréstimos.' });
  }
};

module.exports = {
  createLoan,
  returnLoan,
  getLoans
};