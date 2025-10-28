// const express = require('express');
// const router = express.Router();


// const products = [
//   { id: 1, name: 'Apple', price: 50 },
//   { id: 2, name: 'Banana', price: 20 },
//   { id: 3, name: 'Orange', price: 30 }
// ];


// router.get('/', (req, res) => {
//   res.json(products);
// });


// router.get('/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find(p => p.id === productId);

//   if (!product) {
//     return res.status(404).json({ error: 'Product not found' });
//   }

//   res.json(product);
// });

// module.exports = router;




















//task5
// const express = require('express');
// const router = express.Router();

// let products = [
//   { id: 1, name: 'Apple', price: 50 },
//   { id: 2, name: 'Banana', price: 20 },
// ];

// router.get('/', (req, res) => {
//   res.json(products);
// });

// router.post('/', (req, res) => {
//   const { name, price } = req.body;

//   if (!name || !price) {
//     return res.status(400).json({ error: 'Name and price are required' });
//   }

//   const newProduct = {
//     id: products.length + 1,
//     name,
//     price
//   };

//   products.push(newProduct);
//   res.status(201).json({ message: 'Product added successfully', product: newProduct });
// });

// module.exports = router;








// //task6
// const express = require('express');
// const router = express.Router();

// const products = [
//   { id: 1, name: 'Apple', price: 50 },
//   { id: 2, name: 'Banana', price: 20 },
// ];


// router.get('/', (req, res) => {
//   res.json(products);
// });

// module.exports = router;







// //task7

// const express = require('express');
// const router = express.Router();

// router.use((req, res, next) => {
//   console.log(`[PRODUCT ROUTER] ${req.method} ${req.originalUrl}`);
//   next();
// });

// const products = [
//   { id: 1, name: 'Apple', price: 50 },
//   { id: 2, name: 'Banana', price: 20 },
// ];
// router.get('/', (req, res) => {
//   res.json(products);
// });

// router.get('/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find(p => p.id === productId);

//   if (!product) return res.status(404).json({ error: 'Product not found' });
//   res.json(product);
// });

// module.exports = router;





// //task8
// const express = require('express');
// const router = express.Router();
// router.use((req, res, next) => {
//   console.log(`[PRODUCT ROUTER] ${req.method} ${req.originalUrl}`);
//   next();
// })
// const products = [
//   { id: 1, name: 'Apple', price: 50 },
//   { id: 2, name: 'Banana', price: 20 },
// ];

// router.get('/', (req, res) => {
//   res.json(products);
// });

// router.get('/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find(p => p.id === productId);

//   if (!product) return res.status(404).json({ error: 'Product not found' });
//   res.json(product);
// });

// router.use((req, res) => {
//   res.status(404).json({ error: 'Product route not found' });
// });

// module.exports = router;







// //task11
// const express = require('express');
// const router = express.Router();

// const products = [
//   { id: 1, name: 'Apple', price: 50 },
//   { id: 2, name: 'Banana', price: 20 }
// ];

// router.get('/', (req, res) => {
//   res.json(products);
// });


// router.get('/error', (req, res, next) => {
//   try {
//     throw new Error('Something went wrong in product route!');
//   } catch (err) {
//     next(err);
//   }
// });


// router.use((err, req, res, next) => {
//   console.error('Router-level error:', err.message);
//   res.status(500).json({
//     error: 'Product router error occurred',
//     message: err.message
//   });
// });

// module.exports = router;








// //task12
// const express = require('express');
// const router = express.Router();

// const products = [
//   { id: 1, name: 'Apple', price: 50 },
//   { id: 2, name: 'Banana', price: 20 },
// ];

// router.get('/', (req, res) => {
//   res.json(products);
// });
// router.get('/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find(p => p.id === productId);

//   if (!product) return res.status(404).json({ error: 'Product not found' });
//   res.json(product);
// });

// module.exports = router;











//task13
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of all products');
});

router.post('/', (req, res) => {
  res.send('New product added');
});

module.exports = router;
