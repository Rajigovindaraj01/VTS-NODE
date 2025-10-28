const express = require('express');
const app = express();

const userRouter = require('./routes/users');
const productRouter = require('./routes/produts');

app.use('/users', userRouter);
app.use('/products', productRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Modularized API!');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(3022, () => {
  console.log(' Server running on http://localhost:3022');
});
