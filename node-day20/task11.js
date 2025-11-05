const express = require('express');
const app = express();
const PORT = 3011;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log('Request Body:', req.body);
  const oldSend = res.send;
  res.send = function (data) {
    console.log('Response Data:', data);
    oldSend.apply(res, arguments);
  };
  next();
});

app.post('/test', (req, res) => {
  res.json({ message: 'Request/Response logged successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
