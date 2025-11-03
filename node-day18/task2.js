const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  res.send(`Form received! Name: ${req.body.name}, Age: ${req.body.age}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
