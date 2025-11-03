const express = require('express');
const app = express();
const PORT = 3002;
app.use(express.json());
let products = [
 { id: 1, name: 'Phone' },
 { id: 2, name: 'Laptop' },
];
app.get('/products/:id', (req, res) => {
 const product = products.find(p => p.id === parseInt(req.params.id));
 if (!product) return res.status(404).json({ error: 'Product not found' });
 res.json(product);
});
app.put('/products/:id', (req, res) => {
 const product = products.find(p => p.id === parseInt(req.params.id));
 if (!product) return res.status(404).json({ error: 'Product not found' });
 product.name = req.body.name || product.name;
 res.json(product);
});
app.delete('/products/:id', (req, res) => {
 const index = products.findIndex(p => p.id === parseInt(req.params.id));
 if (index === -1) return res.status(404).json({ error: 'Product not found' });
 products.splice(index, 1);
 res.status(204).send();
});
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});
