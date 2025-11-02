
const express = require('express');
const app = express();

app.get('/movies', (req, res) => {
  const { genre, maxRating } = req.query;

  res.json({
    message: 'Movie search filters received successfully!',
    filters: {
      genre: genre || 'All Genres',
      maxRating: maxRating || 'Any Rating'
    }
  });
});

app.listen(3015, () => {
  console.log(' Server running at http://localhost:3015');
});
