const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3008;

const corsOptions = {
  origin: 'http://localhost:4000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());

app.get('/data', (req, res) => {
  res.json({ message: 'GET request handled' });
});

app.post('/data', (req, res) => {
  res.json({ message: 'POST request handled' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
