const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Raji' },
  { id: 2, name: 'Sandhiya' },
  { id: 3, name: 'Priya' },
];

app.get('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID — must be a number.');
  }


  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).send(`User with ID ${userId} not found.`);
  }

  res.json(user);
});


app.listen(3011, () => {
  console.log('Server running on port http://localhost:3011');
});
