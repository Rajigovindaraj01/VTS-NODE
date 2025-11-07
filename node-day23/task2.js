const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('dev')); 


app.get('/', (req, res) => {
  res.send("Hello Raji! Home route with Morgan logging.");
});

app.get('/about', (req, res) => {
  res.send("About page with Morgan logging.");
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
