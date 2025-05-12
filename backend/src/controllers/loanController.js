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

module.exports = { createLoan };