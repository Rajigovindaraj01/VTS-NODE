const express = require('express');
const morgan = require('morgan');

const app = express();

morgan.token('headers', function (req) {
  return JSON.stringify(req.headers);
});

app.use(morgan(':method :url :status :response-time ms - Headers: :headers'));

app.get('/', (req, res) => {
  res.send("Home page - Custom Morgan token logging headers");
});

app.get('/about', (req, res) => {
  res.send("About page - Custom Morgan token logging headers");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
