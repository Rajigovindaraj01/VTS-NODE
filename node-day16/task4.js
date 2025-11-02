
const express = require('express');
const app = express();


app.get('/home', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested page was not found!',
    path: req.originalUrl,
  });
});

app.listen(3004, () => {
  console.log('Server running at http://localhost:3004');
});
