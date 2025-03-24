const express = require('express');
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

const router = express.Router();

router.post('/books', createBook); // Criar um livro
router.get('/books', getBooks); // Obter todos os livros
router.get('/books/:id', getBookById); // Obter um livro por ID
router.put('/books/:id', updateBook); // Atualizar um livro
router.delete('/books/:id', deleteBook); // Deletar um livro

module.exports = router;