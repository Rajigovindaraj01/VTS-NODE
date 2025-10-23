const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});


app.use((req, res, next) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(3006, () => {
  console.log('Server running on http://localhost:3006');
});
