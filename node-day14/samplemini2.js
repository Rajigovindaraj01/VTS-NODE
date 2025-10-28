const express = require('express');
const router = express.Router();
let products = [
 { id: 1, name: 'Phone' },
 { id: 2, name: 'Laptop' },
];

router.get('/', (req, res) => {
 res.json(products);
});

router.post('/', (req, res) => {
 res.json({ message: 'Product added successfully' });
});
module.exports = router;