const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let products = [
  { id: 1, name: 'Phone', price: 15000 },
  { id: 2, name: 'Laptop', price: 60000 },
];

app.get('/products/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    const err = new Error('Product not found');
    err.status = 404; 
    return next(err);
  }

  res.status(200).json(product);
});


app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);

  res.status(201).json({ message: 'Product created', product: newProduct });
});


app.use((req, res, next) => {
  const err = new Error('Route not found');
  err.status = 404;
  next(err);
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
