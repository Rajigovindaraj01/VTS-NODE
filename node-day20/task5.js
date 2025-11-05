const express = require('express');
const app = express();
const PORT = 3005;

app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  console.error('Error message:', err.message);
  res.status(err.status || 500).json({
    success: false,
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
