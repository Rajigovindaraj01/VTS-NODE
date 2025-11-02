
const express = require('express');
const app = express();

app.get('/next-error', (req, res, next) => {
  const error = new Error('Manual error passed to next()');
  next(error);
});

app.use((err, req, res, next) => {
  console.error('Error caught:', err.message);
  res.status(500).send('Handled by middleware: ' + err.message);
});

app.listen(3002, () => {
  console.log('Server running at http://localhost:3002');
});
