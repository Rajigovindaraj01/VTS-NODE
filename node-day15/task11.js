const express = require('express');
const app = express();


app.get('/products', (req, res) => {
  const categories = req.query.category;

  if (!categories) {
    return res.send('Please provide at least one category.');
  }

  const categoryList = Array.isArray(categories) ? categories : [categories];

  res.send(`Filtering products by categories: ${categoryList.join(', ')}`);
});

app.listen(3010, () => {
  console.log('Server running on port http://localhost:3010');
});
