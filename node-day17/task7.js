const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let products = [
  { id: 1, name: 'Phone', price: 15000 },
  { id: 2, name: 'Laptop', price: 60000 },
];


app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Product name is required and must be a string' });
  }

  if (price === undefined || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }


  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);

  res.status(201).json({ message: 'Product created successfully', product: newProduct });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
