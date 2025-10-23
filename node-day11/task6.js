const express = require('express');
const app = express();


app.get('/posts/:id', (req, res) => {
  res.send(`Post ID: ${req.params.id}`);
});


app.get('/posts', (req, res) => {
  res.send('All posts are being displayed');
});

app.listen(3020, () => {
  console.log('Server running on http://localhost:3020');
});
