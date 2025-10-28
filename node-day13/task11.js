const express = require('express');
const app = express();


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome! Static files are served from the "public" folder.');
});

app.listen(3021, () => {
  console.log('Server running on http://localhost:3021');
});
