const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = req.body;
  res.json({ message: 'User created successfully', user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
