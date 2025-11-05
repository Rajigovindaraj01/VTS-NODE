const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3013;

const corsOptions = {
  origin: 'http://localhost:4000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

function authenticate(req, res, next) {
  const token = req.cookies.authToken;
  if (token === 'secureToken123') next();
  else res.status(401).json({ error: 'Unauthorized' });
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    res.cookie('authToken', 'secureToken123', { httpOnly: true, sameSite: 'lax' });
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/secure-data', authenticate, (req, res) => {
  res.json({ data: 'This is protected data' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
