const express = require('express');
const app = express();
const PORT = 3009;

app.get('/bug', (req, res) => {
  const data = null;
  res.send(data.message); 
});

app.use((err, req, res, next) => {
  console.error('Bug Reproduced:', err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Minimal test case running on http://localhost:${PORT}`);
});
