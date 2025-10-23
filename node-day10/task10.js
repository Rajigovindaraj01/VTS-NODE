const express = require('express');
const app = express();


app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next(); 
});


app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});


app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});


app.listen(3007, () => {
  console.log('Server running on http://localhost:3007');
});
