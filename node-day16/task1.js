
const express = require('express');
const app = express();


app.get('/sync-error', (req, res) => {

  throw new Error('Something went wrong in the server!');
});

app.use((err, req, res, next) => {
  console.error('Error caught:', err.message);
  res.status(500).send('Internal Server Error: ' + err.message);
});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
