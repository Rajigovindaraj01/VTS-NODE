const express = require('express');
const app = express();


app.use(express.json());


const logPostBody = (req, res, next) => {
  if (req.method === 'POST') {
    console.log('📩 POST Request Body:', req.body);
  }
  next();
};


app.use(logPostBody);


app.post('/login', (req, res) => {
  res.json({ message: 'Login data received successfully!' });
});

app.get('/', (req, res) => {
  res.send('Welcome! Only POST requests are logged.');
});

app.listen(3022, () => {
  console.log('Server running on http://localhost:3022');
});
