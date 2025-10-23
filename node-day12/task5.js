const express = require('express');
const app = express();
const PORT = 3006;


app.use(express.json());

app.post('/user', (req, res) => {
  const userData = req.body;

  if (!userData.name || !userData.address || !userData.address.city) {
    return res.status(400).json({ error: 'Missing required fields in nested data' });
  }

  res.json({
    message: 'Nested JSON received successfully!',
    receivedData: userData
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
