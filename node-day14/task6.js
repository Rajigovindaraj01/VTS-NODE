const express = require('express');
const app = express();

const userRouter = require('./routes/users');
const productRouter = require('./routes/produts');

app.use('/users', userRouter);
app.use('/products', productRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(3016, () => {
  console.log('Server running on http://localhost:3016');
});
