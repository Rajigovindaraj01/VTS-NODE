const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.post('/json-data', (req, res) => {
  const data = req.body;
  res.status(200).json({
    message: 'JSON data received successfully',
    receivedData: data
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
