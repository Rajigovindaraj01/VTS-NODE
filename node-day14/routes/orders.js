const express = require('express');
const router = express.Router({ mergeParams: true }); 
const orders = {
  1: [{ orderId: 101, item: 'Laptop' }, { orderId: 102, item: 'Mouse' }],
  2: [{ orderId: 201, item: 'Keyboard' }],
};

router.get('/', (req, res) => {
  const userId = req.params.id;
  const userOrders = orders[userId];

  if (!userOrders) {
    return res.status(404).json({ error: 'No orders found for this user' });
  }

  res.json({
    userId,
    orders: userOrders
  });
});

module.exports = router;
