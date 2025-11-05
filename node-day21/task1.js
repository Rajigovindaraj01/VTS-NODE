const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/data', (req, res) => {
  res.json({ received: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
