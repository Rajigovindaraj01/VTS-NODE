const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('--- Request Log ---');
  console.log(`URL Path: ${req.path}`);
  console.log('URL Params:', req.params);
  console.log('Query Params:', req.query);
  console.log('-------------------');
  next(); 
});
app.get('/product/:id', (req, res) => {
  const id = req.params.id;
  const category = req.query.category;
  res.send(`Product ID: ${id}, Category: ${category || 'Not specified'}`);
});

app.listen(3008, () => {
  console.log('Server running on port http://localhost:3008');
});
