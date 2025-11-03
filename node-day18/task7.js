const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields (name, email, password) are required' });
  }

  res.status(200).json({
    message: 'Registration successful',
    data: { name, email }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
