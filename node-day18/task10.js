const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

const logRequestBody = (req, res, next) => {
  console.log('Parsed Body:', req.body);
  next();
};

app.use(logRequestBody);

app.post('/json-data', (req, res) => {
  res.status(200).json({
    message: 'Body logged successfully',
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
