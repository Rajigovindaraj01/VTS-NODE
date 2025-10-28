const express = require('express');
const app = express();

app.use(express.json());
const productRouter = require('./routes/produts');


app.use('/products', productRouter);

app.listen(3015, () => {
  console.log('Server running on http://localhost:3015');
});
