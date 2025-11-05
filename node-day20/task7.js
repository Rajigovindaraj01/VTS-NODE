const express = require('express');
const debug = require('debug')('app:server');
const app = express();
const PORT = 3007;

app.get('/', (req, res) => {
  debug('GET / route accessed');
  res.send('Welcome to Express with debug logging!');
});

app.get('/cause-error', (req, res, next) => {
  const err = new Error('Intentional error for testing debug logs');
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  debug('Error occurred:', err.message);
  res.status(err.status || 500).json({ success: false, message: err.message });
});

app.listen(PORT, () => {
  debug(`Server running on http://localhost:${PORT}`);
  console.log(`Server running on http://localhost:${PORT}`);
});
