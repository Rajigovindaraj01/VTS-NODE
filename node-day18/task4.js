const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.urlencoded({ extended: true }));

app.post('/form-data', (req, res) => {
  const { name, email } = req.body;
  res.status(200).send(`Form data received successfully! Name: ${name}, Email: ${email}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
