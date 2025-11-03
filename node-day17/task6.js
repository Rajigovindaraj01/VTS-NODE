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
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' }); // 404 Not Found
  }

  res.status(200).json(product);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' }); // 400 Bad Request
  }

  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);

  res.status(201).json({ message: 'Product created', product: newProduct }); // 201 Created
});


app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' }); // 404 Not Found
  }

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' }); // 400 Bad Request
  }

  products[productIndex] = { id, name, price };
  res.status(200).json({ message: 'Product updated', product: products[productIndex] }); // 200 OK
});


app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' }); // 404 Not Found
  }

  const deletedProduct = products.splice(productIndex, 1);
  res.status(200).json({ message: 'Product deleted', deleted: deletedProduct[0] }); // 200 OK
});
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' }); // 404 Not Found
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' }); // 500 Internal Server Error
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
