const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

const logDirectory = path.join(__dirname, 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send("Home page - logged to file and console");
});

app.get('/about', (req, res) => {
  res.send("About page - logged to file and console");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
