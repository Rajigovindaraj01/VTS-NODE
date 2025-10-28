const express = require('express');
const app = express();

const productRouter = require('./routes/produts');

app.use('/products', productRouter);


app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});


app.use((req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.listen(3018, () => {
  console.log('Server running on http://localhost:3018');
});
