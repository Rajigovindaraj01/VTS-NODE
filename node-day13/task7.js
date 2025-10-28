const express = require('express');
const app = express();

const logRequest = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const addCustomHeader = (req, res, next) => {
  res.setHeader('X-App-Name', 'MiddlewareChainDemo');
  next();
};

const authenticate = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (apiKey !== 'raji123') {
    return res.status(403).json({ message: 'Forbidden: Invalid API key' });
  }
  next();
};

app.get('/secure', logRequest, addCustomHeader, authenticate, (req, res) => {
  res.send('Welcome! All middleware passed successfully ✅');
});


app.get('/', (req, res) => {
  res.send('Home route — no middleware chaining here.');
});

app.listen(3017, () => {
  console.log('Server running on http://localhost:3017');
});
