const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3006;

const corsOptions = {
  origin: 'http://localhost:4000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'CORS enabled with credentials support' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
