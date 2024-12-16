const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// GET
app.get('/', (req, res) => {
  res.render("index.ejs");
});




app.listen(PORT, () => {
  console.log('🎧 PORT 3000');
});