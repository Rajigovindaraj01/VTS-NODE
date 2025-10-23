const express = require('express');
const app = express();
const PORT = 3009;


app.use(express.json());


app.post('/numbers', (req, res) => {
  const { numbers } = req.body; 


  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: 'Numbers must be an array' });
  }

  res.status(201).json({
    message: 'Array received successfully!',
    count: numbers.length,
    received: numbers
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
