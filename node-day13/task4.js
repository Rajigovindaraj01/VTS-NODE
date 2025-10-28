const express = require('express');
const app = express();


app.use(express.json());


app.post('/user', (req, res) => {
  const userData = req.body;
  res.json({
    message: 'User data received successfully!',
    data: userData
  });
});

app.listen(3013, () => {
  console.log('Server running on http://localhost:3013');
});
