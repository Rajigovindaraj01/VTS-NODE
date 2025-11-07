const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');

const app = express();


const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) fs.mkdirSync(logDirectory);


const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: logDirectory,
  compress: 'gzip'
});

morgan.token('headers', function (req) {
  return JSON.stringify(req.headers);
});


app.use(morgan(':method :url :status :response-time ms - Headers: :headers', { stream: accessLogStream }));


app.get('/', (req, res) => {
  res.send("Home page - logged to console and file");
});

app.get('/about', (req, res) => {
  res.send("About page - logged to console and file");
});


app.get('/error', (req, res, next) => {
  const err = new Error("Something went wrong!");
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] Error: ${err.message}`);
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
