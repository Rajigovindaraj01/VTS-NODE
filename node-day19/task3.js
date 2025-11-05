const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3004;

const corsOptions = {
  origin: 'http://localhost:4000',
  methods: ['GET', 'POST']
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/data', (req, res) => {
  res.json({ message: 'GET request allowed' });
});

app.post('/data', (req, res) => {
  res.json({ message: 'POST request allowed' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
