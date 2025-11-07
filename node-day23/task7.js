const express = require('express');
const morgan = require('morgan');
const rfs = require('rotating-file-stream'); // rotating file stream
const path = require('path');

const app = express();


const logDirectory = path.join(__dirname, 'logs');
require('fs').existsSync(logDirectory) || require('fs').mkdirSync(logDirectory);


const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', 
  path: logDirectory,
  compress: 'gzip' 
});

app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev')); 
app.get('/', (req, res) => {
  res.send("Home page - Morgan logs rotated daily");
});

app.get('/about', (req, res) => {
  res.send("About page - Morgan logs rotated daily");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
