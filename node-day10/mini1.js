const express = require('express');
const app = express();


app.get('/greet', (req, res) => {
  res.json({
    message: 'Hello! Welcome to the Simple Greeting API 😊'
  });
});

app.listen(3010, () => {
  console.log('Server running on http://localhost:3010');
});
