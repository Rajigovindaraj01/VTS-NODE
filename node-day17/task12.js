const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let products = [
  { id: 1, name: 'Phone', price: 15000 },
  { id: 2, name: 'Laptop', price: 60000 },
  { id: 3, name: 'Tablet', price: 25000 },
  { id: 4, name: 'Smartwatch', price: 5000 },
];

app.get('/products', (req, res) => {
  const { minPrice, maxPrice, name } = req.query;
  let filteredProducts = products;

  if (minPrice) filteredProducts = filteredProducts.filter(p => p.price >= parseInt(minPrice));
  if (maxPrice) filteredProducts = filteredProducts.filter(p => p.price <= parseInt(maxPrice));
  if (name) filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));

  res.status(200).json(filteredProducts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
