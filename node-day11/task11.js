const express = require('express');
const app = express();


app.get('/text', (req, res) => {
  res.type('text/plain'); 
  res.send('This is a plain text response.');
});


app.get('/json', (req, res) => {
  res.json({
    status: 'success',
    message: 'This is a JSON response'
  });
});


app.get('/html', (req, res) => {
  res.type('text/html');
  res.send('<h1>This is an HTML response</h1><p>Hello from Express!</p>');
});


app.listen(3025, () => {
  console.log('Server running on http://localhost:3025');
});
