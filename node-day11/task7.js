const express = require('express');
const app = express();


app.get('/status', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running smoothly',
    timestamp: new Date()
  });
});


app.listen(3021, () => {
  console.log('Server running on http://localhost:3021');
});
