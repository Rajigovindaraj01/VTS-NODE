const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

let users = [];


app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: 'User created successfully', user });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
