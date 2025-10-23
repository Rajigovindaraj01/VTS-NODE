const express = require('express');
const app = express();
const PORT = 3004;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  res.send(`Login successful for user: ${username}`);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
