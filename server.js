const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI,);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Comic = require('./models/comic');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));


~~~~~~~~~~~~~~~~
// ROUTE C.R.U.D.
~~~~~~~~~~~~~~~~
// GET
app.get('/', (req, res) => {
  res.render("index.ejs");
});

// GET (index)
app.get('/comics', async (req, res) => {
  const allComics = await Comic.find();
  res.render("comics/index.ejs");
});

// GET (new)
app.get('/comics/new', async (req, res) => {
  res.render('comics/new.ejs');
});

// POST (create)
app.post('/comics', async (req, res) => {
  if (req.body.wishList === 'on') {
    req.body.wishList = true;
  } else {
    req.body.wishList = false;
  }
  await Comic.create(req.body);
  res.redirect('/comics'); // redirect to index page
});

// GET (show)
app.get('/comics/:id', async (req, res) => {
  const foundComic = await Comic.findById(req.params.id);
  res.render('comics/show.ejs', { comic: foundComic });
});


// GET (edit)
app.get('/comics/:id/edit', async (req, res) => {
  const foundComic = await Comic.findById(req.params.id);
  res.render('comics/edit.ejs', { comic: foundComic });
});

// PUT (update)
app.put('/comics/:id', async (req, res) => {
  if (req.body.wishList === 'on') {
    req.body.wishList = true;
  } else {
    req.body.wishList = false;
  }
  await Comic.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/comics/${req.params.id}`); // redirect to show page
});

// DELETE (destroy)
app.delete('/comics/:id', async (req, res) => {
 await Comic.findByIdAndDelete(req.params.id);
 res.redirect('/comics'); // redirect to index page
});

// ~~~~~~~~~~~~~~~~
// LISTENER
// ~~~~~~~~~~~~~~~~
app.listen(process.env.PORT, () => {
  console.log(`🎧 PORT 3000 is running on http://localhost:${process.env.PORT}`);
});