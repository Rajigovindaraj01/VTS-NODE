const express = require('express');
const app = express();
const PORT = 3010;


const products = [
  { id: 1, name: 'Laptop', price: 60000 },
  { id: 2, name: 'Phone', price: 25000 },
  { id: 3, name: 'Headphones', price: 2000 },
];


app.get('/products', (req, res) => {
  res.json(products);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
