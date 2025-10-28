const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});


app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});

app.use((err, req, res, next) => {
  console.error('Error message:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error!',
    error: err.message
  });
});

app.listen(3015, () => {
  console.log('Server running on http://localhost:3015');
});
