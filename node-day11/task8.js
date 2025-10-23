const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); 
});


app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});


app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(3022, () => {
  console.log('Server running on http://localhost:3022');
});
