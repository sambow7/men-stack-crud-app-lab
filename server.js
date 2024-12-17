const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI,);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware



~~~~~~~~~~~~~~~~
// ROUTE C.R.U.D.
~~~~~~~~~~~~~~~~
// GET
app.get('/', (req, res) => {
  res.render("index.ejs");
});

// GET (index)
app.get('/comics', async (req, res) => {
  res.render("comics/new.ejs");
});

// GET (new)

// POST (create)
app.post('/comics')

// GET (show)

// GET (edit)

// PUT (update)


// DELETE (destroy)






// ~~~~~~~~~~~~~~~~
// LISTENER
// ~~~~~~~~~~~~~~~~
app.listen(process.env.PORT, () => {
  console.log(`🎧 PORT 3000 is running on http://localhost:${process.env.PORT}`);
});