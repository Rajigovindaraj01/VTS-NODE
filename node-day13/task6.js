const express = require('express');
const app = express();

const VALID_API_KEY = 'mysecretapikey123'
const apiKeyValidator = (req, res, next) => {
  const apiKey = req.header('x-api-key'); 

  if (!apiKey) {
    return res.status(401).json({ message: 'API key missing' });
  }

  if (apiKey !== VALID_API_KEY) {
    return res.status(403).json({ message: 'Invalid API key' });
  }
  next();
};


app.use('/secure', apiKeyValidator);


app.get('/secure/data', (req, res) => {
  res.json({ message: 'Access granted! Valid API key.' });
});


app.get('/', (req, res) => {
  res.send('Welcome! This route does not need an API key.');
});

app.listen(3016, () => {
  console.log('Server running on http://localhost:3016');
});
