const express = require('express');
const app = express();

// Example 1: 200 OK
app.get('/success', (req, res) => {
  res.status(200).send('Everything is OK!');
});

// Example 2: 404 Not Found
app.get('/notfound', (req, res) => {
  res.status(404).send('Sorry, page not found!');
});

// Example 3: 500 Internal Server Error
app.get('/error', (req, res) => {
  res.status(500).send('Internal Server Error occurred!');
});

// Example 4: Custom status 201 Created
app.post('/created', (req, res) => {
  res.status(201).send('Resource created successfully!');
});

// Start the server
app.listen(3005, () => {
  console.log('Server running on http://localhost:3005');
});
