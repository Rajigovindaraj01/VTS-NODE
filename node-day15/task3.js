const express = require('express');
const app = express();


app.get('/search', (req, res) => {

  const query = req.query.q;
  const category = req.query.category;

  res.send(`Search results for "${query}" in category "${category}"`);
});


app.listen(3002, () => {
  console.log('Server running on port http://localhost:3002');
});
