const express = require('express');
const app = express();

// Example GET route returning JSON
app.get('/user', (req, res) => {
  const user = {
    id: 1,
    name: 'Rajeshwari',
    role: 'MERN Developer'
  };
  res.json(user); 
});


app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'swetha' },
    { id: 2, name: 'priya' },
    { id: 3, name: 'Rajeshwari' }
  ];
  res.json(users);
});


app.listen(3009, () => {
  console.log('Server running on http://localhost:3009');
});
