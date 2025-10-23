const express = require('express');
const app = express();
const PORT = 3011;


app.use(express.json());


app.post('/greet', (req, res) => {
  const { name, age } = req.body;


  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }


  res.status(201).json({
    message: `Hello ${name}! You are ${age} years old.`,
    receivedData: { name, age }
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
