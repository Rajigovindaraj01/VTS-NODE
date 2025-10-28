const express = require('express');
const app = express();

const attachUserMiddleware = (req, res, next) => {
  req.user = {
    id: 1,
    name: 'Rajeshwari',
    role: 'MERN Stack Developer'
  };

  console.log('Middleware executed: User attached to request');
  next();
};

app.get('/profile', attachUserMiddleware, (req, res) => {
  res.json({
    message: 'User Profile Data',
    user: req.user
  });
});

app.listen(3020, () => {
  console.log('Server running on http://localhost:3020');
});
