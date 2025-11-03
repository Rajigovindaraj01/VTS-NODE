const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let products = [
  { id: 1, name: 'Phone', price: 15000 },
  { id: 2, name: 'Laptop', price: 60000 },
];

app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;

  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[productIndex] = { id, name, price };

  res.json({
    message: 'Product updated successfully',
    updatedProduct: products[productIndex],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
