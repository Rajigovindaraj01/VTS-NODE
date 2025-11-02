const express = require('express');
const app = express();

app.get('/item/:id', (req, res) => {
  const itemId = req.params.id;

  if (!itemId) {
    return res.status(400).send('Error: Missing required parameter "id"');
  }

  res.send(`You requested item with ID: ${itemId}`);
});

app.listen(3003, () => {
  console.log('Server running on port http://localhost:3000');
});
