const express = require('express');
const app = express();


app.get('/search', (req, res) => {
  const term = req.query.term;
  const category = req.query.category;

  res.send(`Search Term: ${term}, Category: ${category}`);
});


app.listen(3016, () => {
  console.log('Server running on http://localhost:3016');
});
