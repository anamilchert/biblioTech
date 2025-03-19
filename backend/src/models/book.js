const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    publishedYear: { type: Number },
    quantity: { type: Number, required: true, min: 0 },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Book', BookSchema);