const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3010;

const corsOptions = {
  origin: 'http://localhost:4000',
  methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.on('finish', () => {
    console.log('CORS Headers:', {
      'Access-Control-Allow-Origin': res.get('Access-Control-Allow-Origin'),
      'Access-Control-Allow-Methods': res.get('Access-Control-Allow-Methods'),
      'Access-Control-Allow-Credentials': res.get('Access-Control-Allow-Credentials')
    });
  });
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'CORS headers logged in console' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
