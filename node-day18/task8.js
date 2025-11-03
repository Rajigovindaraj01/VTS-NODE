const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json({ limit: '100kb' }));

app.post('/upload', (req, res) => {
  res.status(200).json({
    message: 'JSON data received within size limit',
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
