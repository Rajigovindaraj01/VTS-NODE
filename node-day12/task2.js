const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());


app.post('/echo', (req, res) => {
  const receivedData = req.body; 
  res.json({
    message: 'Echo successful!',
    received: receivedData
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
