
const express = require('express');
const app = express();


const userRouter = require('./task1');


app.use('/users', userRouter);


app.get('/', (req, res) => {
  res.send('Welcome to the main app!');
});

app.listen(3011, () => {
  console.log('Server running on http://localhost:3011');
});
