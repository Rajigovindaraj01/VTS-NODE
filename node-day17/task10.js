const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let products = [
  { id: 1, name: 'Phone', price: 15000 },
  { id: 2, name: 'Laptop', price: 60000 },
];

app.patch('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const { name, price } = req.body;

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;

  res.status(200).json({ message: 'Product partially updated', product });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
