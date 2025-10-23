const express = require('express');
const app = express();

const users = {
  1: { name: 'swetha', friends: ['Bob', 'Charlie'] },
  2: { name: 'mohan', friends: ['Alice'] },
  3: { name: 'preetha', friends: ['Alice', 'Bob'] }
};


app.get('/users/:id/friends', (req, res) => {
  const userId = req.params.id;
  const user = users[userId];

  if (user) {
    res.json({
      userId: userId,
      name: user.name,
      friends: user.friends
    });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});


app.listen(3024, () => {
  console.log('Server running on http://localhost:3024');
});
