const express = require('express');
const app = express();


app.get('/item/:category/:id', (req, res) => {
  const category = req.params.category;
  const id = req.params.id;

  res.send(`You requested item ID: ${id} from category: ${category}`);
});

app.listen(3001, () => {
  console.log('Server running on port http://localhost:3001');
});
