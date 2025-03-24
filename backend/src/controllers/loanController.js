const Loan = require('../models/loan');
const User = require('../models/user');
const Book = require('../models/book');

// Criar um novo empréstimo
exports.createLoan = async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);
    if (!user || !book) return res.status(404).json({ message: 'User or Book not found' });

    if (book.quantity <= 0) return res.status(400).json({ message: 'No copies available for loan' });

    const newLoan = new Loan({ user: userId, book: bookId });
    await newLoan.save();

    book.quantity -= 1;
    await book.save();

    res.status(201).json(newLoan);
  } catch (err) {
    res.status(400).json({ message: 'Error creating loan', error: err });
  }
};

// Obter todos os empréstimos
exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate('user book');
    res.status(200).json(loans);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching loans', error: err });
  }
};

// Obter um empréstimo por ID
exports.getLoanById = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id).populate('user book');
    if (!loan) return res.status(404).json({ message: 'Loan not found' });
    res.status(200).json(loan);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching loan', error: err });
  }
};

// Atualizar status do empréstimo
exports.updateLoan = async (req, res) => {
  try {
    const { returnDate, status } = req.body;
    const loan = await Loan.findByIdAndUpdate(req.params.id, { returnDate, status }, { new: true });
    if (!loan) return res.status(404).json({ message: 'Loan not found' });

    if (status === 'returned') {
      const book = await Book.findById(loan.book);
      book.quantity += 1;
      await book.save();
    }

    res.status(200).json(loan);
  } catch (err) {
    res.status(400).json({ message: 'Error updating loan', error: err });
  }
};

// Deletar um empréstimo
exports.deleteLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndDelete(req.params.id);
    if (!loan) return res.status(404).json({ message: 'Loan not found' });
    res.status(200).json({ message: 'Loan deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting loan', error: err });
  }
};