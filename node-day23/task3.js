const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send("Home page - Morgan 'dev' logging");
});

app.get('/about', (req, res) => {
  res.send("About page - Morgan 'dev' logging");
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
