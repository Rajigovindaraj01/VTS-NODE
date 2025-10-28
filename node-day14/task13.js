
const express = require('express');
const app = express();

const userRouter = require('./routes/users');
const productRouter = require('./routes/produts');

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(3023, () => {
  console.log('Server running at http://localhost:3023');
});
