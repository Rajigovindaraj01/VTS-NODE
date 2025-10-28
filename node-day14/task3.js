const express = require('express');
const app = express();


const users = [
  { id: 1, name: 'Rajeshwari' },
  { id: 2, name: 'Sandhiya' },
  { id: 3, name: 'Nisha' }
];


app.get('/users', (req, res) => {
  res.json(users);
});


app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

app.listen(3013, () => {
  console.log('Server running on http://localhost:3013');
});
