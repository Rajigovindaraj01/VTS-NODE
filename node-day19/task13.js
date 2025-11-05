const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3014;

const corsOptions = {
  origin: ['https://your-client-app.vercel.app'],
  methods: ['GET', 'POST'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/data', (req, res) => {
  res.json({ message: 'CORS-enabled API working successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
