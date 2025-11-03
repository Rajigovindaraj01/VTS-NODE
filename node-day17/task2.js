const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 60000 },
  { id: 2, name: 'Phone', price: 25000 },
];


app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1, 
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);
  res.status(201).json({
    message: 'New product added successfully!',
    product: newProduct,
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
