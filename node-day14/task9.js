const express = require('express');
const router = express.Router();
const orderRouter = require('./routes/orders');


const users = [
  { id: 1, name: 'Rajeshwari' },
  { id: 2, name: 'Sandhiya' },
];


router.get('/', (req, res) => {
  res.json(users);
});

router.use('/:id/orders', orderRouter);

module.exports = router;
