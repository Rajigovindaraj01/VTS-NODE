const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q || '';    
  const page = req.query.page || 1;   

  res.json({
    searchQuery: query,
    pageNumber: page
  });
});


app.listen(3029, () => {
  console.log('Server running on http://localhost:3029');
});
