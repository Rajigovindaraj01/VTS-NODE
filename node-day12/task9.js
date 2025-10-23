const express = require('express');
const app = express();
const PORT = 3010;


app.use(express.json());


let users = [];


app.post('/users', (req, res) => {
  const { name, email } = req.body;

 
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }


  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  res.status(201).json({
    message: 'User added successfully!',
    user: newUser
  });
});


app.get('/users', (req, res) => {
  res.json({ total: users.length, users });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
