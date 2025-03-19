const express = require('express');
const Book = require('../models/book');
const router = express.Router();

router.post('/books', async (req, res) => {
  const { title, author, genre, publishedYear, quantity } = req.body;
  try {
    const newBook = new Book({ title, author, genre, publishedYear, quantity });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: 'Error creating book', error: err });
  }
});

router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching books', error: err });
  }
});

router.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching book', error: err });
  }
});

router.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, publishedYear, quantity } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, { title, author, genre, publishedYear, quantity }, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: 'Error updating book', error: err });
  }
});

router.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting book', error: err });
  }
});

module.exports = router;