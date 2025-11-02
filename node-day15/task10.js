const express = require('express');
const app = express();

app.get('/user/:id?', (req, res) => {
  const userId = req.params.id;
  if (userId && !/^[0-9]+$/.test(userId)) {
    return res.status(400).send('Invalid ID — must be a number');
  }

  if (userId) {
    res.send(`User ID: ${userId}`);
  } else {
    res.send('No User ID provided — showing all users');
  }
});

app.listen(3009, () => {
  console.log('✅ Server running on http://localhost:3009');
});
