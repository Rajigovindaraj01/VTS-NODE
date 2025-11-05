const express = require('express');
const app = express();
const PORT = 3008;

app.get('/', (req, res) => {
  res.send('Welcome to Async Error Handling Example');
});

app.get('/async-error', async (req, res, next) => {
  try {
    throw new Error('Async error occurred!');
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ success: false, message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
