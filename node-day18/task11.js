const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
  res.status(200).json({
    message: 'Data received successfully',
    contentType: req.headers['content-type'],
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
