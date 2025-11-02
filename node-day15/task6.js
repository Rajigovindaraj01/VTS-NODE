const express = require('express');
const app = express();

app.get('/product/:id', (req, res) => {

  const productId = req.params.id;

  const category = req.query.category || 'general';

  res.send(`Product ID: ${productId}, Category: ${category}`);
});


app.listen(3005, () => {
  console.log('Server running on port http://localhost:3005');
});
