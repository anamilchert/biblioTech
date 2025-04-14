const Loan = require('../models/loan');
const Book = require('../models/book');

const createLoan = async (req, res) => {
  const { user, book } = req.body;

  try {
    const bookExists = await Book.findById(book);
    if (!bookExists) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    const newLoan = new Loan({ user, book });
    await newLoan.save();

    return res.status(201).json({ message: 'Empréstimo registrado com sucesso!' });
  } catch (err) {
    console.error('Erro ao registrar empréstimo:', err);
    return res.status(500).json({ message: 'Erro ao registrar o empréstimo.' });
  }
};

module.exports = { createLoan };