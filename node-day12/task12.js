const express = require('express');
const app = express();
const PORT = 3012;


app.use(express.json());


app.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log('POST Request Body:', req.body);
  }
  next(); 
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({
    message: `Login attempted for user: ${username}`,
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
