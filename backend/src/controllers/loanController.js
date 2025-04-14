const Loan = require('../models/loan');
const Book = require('../models/book');

const createLoan = async (req, res) => {
  const { user, book } = req.body;

  try {
    const bookToUpdate = await Book.findById(book);
    if (!bookToUpdate) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    if (bookToUpdate.status === 'borrowed') {
      return res.status(400).json({ message: 'Este livro já está emprestado.' });
    }

    const newLoan = new Loan({ user, book });

    await newLoan.save();

    bookToUpdate.status = 'borrowed';
    await bookToUpdate.save();

    return res.status(201).json({ message: 'Empréstimo registrado com sucesso!' });
  } catch (err) {
    console.error('Erro ao registrar empréstimo:', err);
    return res.status(500).json({ message: 'Erro ao registrar o empréstimo.' });
  }
};

module.exports = { createLoan };