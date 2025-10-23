const express = require('express');
const app = express();
const PORT = 3005;


app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;


  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  res.json({ message: `Login successful for user: ${username}` });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
