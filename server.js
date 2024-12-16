const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI,);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware

// GET
app.get('/', (req, res) => {
  res.render("index.ejs");
});

app.get('/comics', async (req, res) => {
  res.render("comics/new.ejs");
});

// POST


// PUT


// DELETE






// ~~~~~~~~~~~~~~~~
// LISTENER
// ~~~~~~~~~~~~~~~~
app.listen(PORT, () => {
  console.log('🎧 PORT 3000');
});