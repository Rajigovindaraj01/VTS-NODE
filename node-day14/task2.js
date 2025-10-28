const express = require('express');
const app = express();


const users = [
  { id: 1, name: 'Rajeshwari' },
  { id: 2, name: 'Sandhiya' },
  { id: 3, name: 'Nisha' }
];


app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3012, () => {
  console.log('Server running on http://localhost:3012');
});
