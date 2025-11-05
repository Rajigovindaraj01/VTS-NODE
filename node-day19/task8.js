const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3009;

const corsOptions = {
  origin: 'http://localhost:4000'
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/public', (req, res) => {
  res.json({ message: 'CORS enabled for this route' });
});

app.get('/private', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'null');
  next();
}, (req, res) => {
  res.json({ message: 'CORS disabled for this route' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
