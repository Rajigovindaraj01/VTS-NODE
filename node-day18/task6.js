const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/echo', (req, res) => {
  res.status(200).json({
    message: 'Data received successfully',
    yourData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
