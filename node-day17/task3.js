const express = require('express');
const app = express();
const PORT = 3000;


const products = [
  { id: 1, name: 'Laptop', price: 60000 },
  { id: 2, name: 'Phone', price: 25000 },
  { id: 3, name: 'Tablet', price: 15000 },
];


app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id); // get ID from URL
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
