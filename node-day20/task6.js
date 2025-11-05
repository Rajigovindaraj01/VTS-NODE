const express = require('express');
const app = express();
const PORT = 3006;

app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

app.get('/cause-error', (req, res, next) => {
  const err = new Error('Test error generated!');
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  console.error('Logged Error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
