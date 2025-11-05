const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/data', (req, res) => {
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Headers:', req.headers);
  res.json({ message: 'Request info logged in console' });
});

app.post('/data', (req, res) => {
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Body:', req.body);
  res.json({ message: 'POST request logged successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
