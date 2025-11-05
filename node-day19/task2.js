const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

const corsOptions = {
  origin: 'http://localhost:4000'
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'CORS restricted to http://localhost:4000' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
