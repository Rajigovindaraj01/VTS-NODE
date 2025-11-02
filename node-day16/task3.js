
const express = require('express');
const app = express();

app.get('/json-error', (req, res, next) => {
  const err = new Error('Unable to fetch movie details');
  err.statusCode = 404; 
  next(err); 
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    status: err.statusCode || 500,
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
  });
});

app.listen(3003, () => {
  console.log('Server running at http://localhost:3003');
});
