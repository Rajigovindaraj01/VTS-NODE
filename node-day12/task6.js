const express = require('express');
const app = express();
const PORT = 3007;


app.use(express.json());


app.post('/register', (req, res) => {
  const { username, email } = req.body;


  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' });
  }


  res.status(201).json({
    message: 'User registered successfully!',
    user: { username, email }
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
