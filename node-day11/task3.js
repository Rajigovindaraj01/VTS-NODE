const express = require('express');
const app = express();


app.get('/users/:id', (req, res) => {
  const userId = req.params.id; 
  res.send(`User ID received: ${userId}`);
});


app.listen(3014, () => {
  console.log('Server running on http://localhost:3014');
});
