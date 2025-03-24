const express = require('express');
const {
  createLoan,
  getLoans,
  getLoanById,
  updateLoan,
  deleteLoan
} = require('../controllers/loanController');

const router = express.Router();

router.post('/loans', createLoan); // Criar um empréstimo
router.get('/loans', getLoans); // Obter todos os empréstimos
router.get('/loans/:id', getLoanById); // Obter um empréstimo por ID
router.put('/loans/:id', updateLoan); // Atualizar status do empréstimo
router.delete('/loans/:id', deleteLoan); // Deletar um empréstimo

module.exports = router;