const express = require('express');
const app = express();

app.get('/items', (req, res) => {
  const limit = parseInt(req.query.limit, 10);
  const page = parseInt(req.query.page, 10);
  if (isNaN(limit) || isNaN(page) || limit <= 0 || page <= 0) {
    return res.status(400).send('Error: "limit" and "page" must be positive numbers.');
  }

  res.send(`Showing page ${page} with a limit of ${limit} items per page.`);
});

app.listen(3006, () => {
  console.log('Server running on port http://localhost:3006');
});
