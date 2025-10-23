const express = require('express');
const app = express();


app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.listen(3013, () => {
  console.log('Server running on http://localhost:3013');
});
