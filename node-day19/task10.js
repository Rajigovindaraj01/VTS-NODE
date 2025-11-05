const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3011;

const allowedOrigins = ['http://localhost:4000', 'http://localhost:5000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    res.status(403).json({ error: 'Origin not allowed' });
  } else {
    next(err);
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'CORS origin validated successfully' });
});

app.listen(PORT,() => {
  console.log(`Server running on http://localhost:${PORT}`);
});
