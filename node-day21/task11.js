const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 25 }
];


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/users', (req, res) => res.json(users));

app.get('/users/age/:age', (req, res) => {
  const age = parseInt(req.params.age);
  const filteredUsers = users.filter(u => u.age === age);
  if (filteredUsers.length === 0) return res.status(404).json({ error: 'No users found with this age' });
  res.json(filteredUsers);
});


app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});


app.post('/users', (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) return res.status(400).json({ error: 'Name, email, and age are required' });
  const newUser = { id: users.length + 1, name, email, age };
  users.push(newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  const { name, email, age } = req.body;
  if (!name && !email && !age) return res.status(400).json({ error: 'At least one field is required to update' });
  if (name) user.name = name;
  if (email) user.email = email;
  if (age) user.age = age;
  res.json({ message: 'User updated successfully', user });
});


app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  const removedUser = users.splice(index, 1)[0];
  res.json({ message: 'User deleted successfully', user: removedUser });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
