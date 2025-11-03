const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let users = [
  { id: 1, name: 'Raji' },
  { id: 2, name: 'Priya' },
];

let orders = [
  { id: 1, userId: 1, item: 'Phone', price: 15000 },
  { id: 2, userId: 1, item: 'Laptop', price: 60000 },
  { id: 3, userId: 2, item: 'Tablet', price: 20000 },
];

app.get('/users/:id/orders', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const userOrders = orders.filter((o) => o.userId === userId);
  res.status(200).json({ user, orders: userOrders });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
