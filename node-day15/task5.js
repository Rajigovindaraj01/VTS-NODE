const express = require('express');
const app = express();

app.get('/search', (req, res) => {

  const query = req.query.q || 'all';
  const category = req.query.category || 'general';

  res.send(`Search results for "${query}" in category "${category}"`);
});

app.listen(3004, () => {
  console.log('Server running on port http://localhost:3004');
});
