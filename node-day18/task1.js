const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.post('/data', (req, res) => {
  res.json({
    message: 'JSON data received successfully',
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
