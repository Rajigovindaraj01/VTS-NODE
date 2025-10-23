const express = require('express');
const app = express();

// Route 1 — Home
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Route 2 — About
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Route 3 — Contact
app.get('/contact', (req, res) => {
  res.send('Contact us at: contact@freshmart.com');
});

// Route 4 — Services
app.get('/services', (req, res) => {
  res.send('Here are our available services!');
});

// Start the server
app.listen(3003, () => {
  console.log('Server running on http://localhost:3003');
});
