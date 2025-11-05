const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  if (!name && !email) return res.status(400).json({ error: 'At least one field (name or email) is required to update' });

  if (name) user.name = name;
  if (email) user.email = email;
  res.json({ message: 'User updated successfully', user });
});


app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  const removedUser = users.splice(index, 1)[0];
  res.json({ message: 'User deleted successfully', user: removedUser });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
