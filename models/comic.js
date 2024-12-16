const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({

  publisher: String,
  title: String,
  inker: String,
  year: Number,
  
});