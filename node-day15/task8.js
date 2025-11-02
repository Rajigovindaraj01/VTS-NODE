const express = require('express');
const app = express();

const products = [
  { id: 1, name: 'Apple', category: 'fruit', price: 100 },
  { id: 2, name: 'Banana', category: 'fruit', price: 50 },
  { id: 3, name: 'Carrot', category: 'vegetable', price: 30 },
  { id: 4, name: 'Broccoli', category: 'vegetable', price: 80 },
  { id: 5, name: 'Mango', category: 'fruit', price: 120 },
];

app.get('/products', (req, res) => {
  const category = req.query.category;
  const maxPrice = parseInt(req.query.maxPrice);

  let filtered = products;

  if (category) {
    filtered = filtered.filter(item => item.category === category.toLowerCase());
  }

  if (!isNaN(maxPrice)) {
    filtered = filtered.filter(item => item.price <= maxPrice);
  }

  if (filtered.length === 0) {
    return res.status(404).send('No products found matching your filters.');
  }

  res.json(filtered);
});

app.listen(3007, () => {
  console.log('Server running on port http://localhost:3007');
});
