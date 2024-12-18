const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
  publisher: String,
  title: String,
  writer: String,
  artist: String,
  issue: Number,
  wishList: Boolean,
});

const Comic = mongoose.model('Comic', comicSchema, 'comics'); //Specify collection name

module.exports = Comic;