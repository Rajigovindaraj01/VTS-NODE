const express = require('express');
const app = express();
const PORT = 3004;

app.use(express.json());

let users = [
  { id: 1, name: 'Raji', age: 23 },
  { id: 2, name: 'Anu', age: 25 },
];

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: 'User created successfully', user });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
