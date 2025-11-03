const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());


let products = [
  { id: 1, name: 'Phone', price: 15000 },
  { id: 2, name: 'Laptop', price: 60000 },
  { id: 3, name: 'Tablet', price: 25000 },
];

app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);

  
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.json({
    message: 'Product deleted successfully',
    deletedProduct: deletedProduct[0],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
