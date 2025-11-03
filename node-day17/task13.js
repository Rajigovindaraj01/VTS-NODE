const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let products = [
  { id: 1, name: 'Phone', price: 15000 },
  { id: 2, name: 'Laptop', price: 60000 },
];

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
});


app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ message: 'Name and price required' });
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json({ message: 'Product created', product: newProduct });
});


app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  products[index] = { id, name, price };
  res.status(200).json({ message: 'Product updated', product: products[index] });
});


app.patch('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  const { name, price } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  res.status(200).json({ message: 'Product partially updated', product });
});


app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  const deleted = products.splice(index, 1);
  res.status(200).json({ message: 'Product deleted', deleted });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
