const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
  publisher: { type: String, required: true },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  issue: Number,
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;