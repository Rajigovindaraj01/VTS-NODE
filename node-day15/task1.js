const express = require('express');
const app = express();
app.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`You requested item with ID: ${itemId}`);
});

app.listen(3000, () => {
  console.log('Server running on port http://localhost:3000');
});
