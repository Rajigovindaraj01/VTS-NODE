const express = require('express');
const app = express();
const PORT = 3008;


app.use(express.json());


app.post('/data', (req, res) => {
  res.status(200).json({ message: 'Valid JSON received', data: req.body });
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
