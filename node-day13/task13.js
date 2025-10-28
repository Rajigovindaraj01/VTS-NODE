const express = require('express');
const app = express();


const corsMiddleware = (req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');


  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');


  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next(); 
};

app.use(corsMiddleware);

app.get('/', (req, res) => {
  res.json({ message: 'CORS middleware working fine!' });
});

app.listen(3023, () => {
  console.log('Server running on http://localhost:3023');
});
