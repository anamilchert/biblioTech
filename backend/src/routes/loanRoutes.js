const express = require('express');
const Loan = require('../models/loan');
const User = require('../models/user');
const Book = require('../models/book');
const router = express.Router();

router.post('/loans', async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);
    if (!user || !book) {
      return res.status(404).json({ message: 'User or Book not found' });
    }
    if (book.quantity <= 0) {
      return res.status(400).json({ message: 'No copies available for loan' });
    }

    const newLoan = new Loan({ user: userId, book: bookId });
    await newLoan.save();
    book.quantity -= 1;
    await book.save();
    res.status(201).json(newLoan);
  } catch (err) {
    res.status(400).json({ message: 'Error creating loan', error: err });
  }
});

router.get('/loans', async (req, res) => {
  try {
    const loans = await Loan.find().populate('user book');
    res.status(200).json(loans);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching loans', error: err });
  }
});

router.get('/loans/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findById(id).populate('user book');
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    res.status(200).json(loan);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching loan', error: err });
  }
});

router.put('/loans/:id', async (req, res) => {
  const { id } = req.params;
  const { returnDate, status } = req.body;
  try {
    const loan = await Loan.findByIdAndUpdate(id, { returnDate, status }, { new: true });
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    // Atualizar a quantidade de livros após o retorno
    if (status === 'returned') {
      const book = await Book.findById(loan.book);
      book.quantity += 1;
      await book.save();
    }

    res.status(200).json(loan);
  } catch (err) {
    res.status(400).json({ message: 'Error updating loan', error: err });
  }
});

router.delete('/loans/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findByIdAndDelete(id);
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    res.status(200).json({ message: 'Loan deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting loan', error: err });
  }
});

module.exports = router;