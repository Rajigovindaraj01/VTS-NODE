
const express = require('express');
const app = express();

app.get('/crash', (req, res, next) => {
  const err = new Error('Something went wrong while processing your request!');
  next(err);
});

app.use((err, req, res, next) => {
  console.error('🧩 ERROR LOG ---------------------');
  console.error('Message:', err.message);
  console.error('Path:', req.originalUrl);
  console.error('Time:', new Date().toISOString());
  console.error('--------------------------------');

  res.status(500).json({
    success: false,
    message: 'Internal Server Error! Please try again later.',
  });
});

app.listen(3005, () => {
  console.log('Server running at http://localhost:3005');
});
