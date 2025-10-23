const express = require('express');
const app = express();


app.get('/new-route', (req, res) => {
  res.send('You have been redirected to the new route!');
});


app.get('/old-route', (req, res) => {
  res.redirect('/new-route'); 
});


app.listen(3026, () => {
  console.log('Server running on http://localhost:3026');
});
