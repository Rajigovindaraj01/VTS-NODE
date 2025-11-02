
const express = require('express');
const app = express();

app.get('/profile/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Hello ${username}! 🎉 Your profile page is now live. Explore your personal dashboard and settings here.`);
});

app.listen(3014, () => {
  console.log('Server running at http://localhost:3014');
});
