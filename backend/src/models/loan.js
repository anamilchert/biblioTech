const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.Mixed, required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  });
  
  module.exports = mongoose.model('Loan', LoanSchema);  