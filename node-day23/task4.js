const express = require('express');
const morgan = require('morgan');

const app = express();

// Choose the format here: 'dev', 'combined', 'short', 'tiny'
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send("Home page - Morgan logging");
});

app.get('/about', (req, res) => {
  res.send("About page - Morgan logging");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
