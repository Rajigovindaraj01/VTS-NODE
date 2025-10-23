const express = require('express');
const app = express();


app.get('/products/:category/:id', (req, res) => {
  const category = req.params.category;
  const productId = req.params.id;

  res.send(`Category: ${category}, Product ID: ${productId}`);
});


app.listen(3015, () => {
  console.log('Server running on http://localhost:3015');
});
