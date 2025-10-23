const express = require('express');
const app = express();


app.get('/profile/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Profile page of ${username}`);
});


app.listen(3028, () => {
  console.log('Server running on http://localhost:3028');
});
