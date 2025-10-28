const express = require('express');
const app = express();

const productRouter = require('./routes/produts');

app.use('/products', productRouter);

app.listen(3017, () => {
  console.log('Server running on http://localhost:3017');
});
