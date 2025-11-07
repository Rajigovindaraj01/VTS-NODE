const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');

const app = express();


const morganStream = {
  write: (message) => {
    const log = {
      message: message.trim(),
      timestamp: new Date().toISOString()
    };
    logger.info(log);
  }
};


app.use(morgan('combined', { stream: morganStream }));

app.get('/', (req, res) => {
  res.send("Home page - logs formatted as JSON");
});

app.get('/about', (req, res) => {
  res.send("About page - logs formatted as JSON");
});


app.get('/error', (req, res, next) => {
  const err = new Error("Something went wrong!");
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  logger.error({
    message: err.message,
    method: req.method,
    url: req.originalUrl,
    stack: err.stack
  });
  res.status(err.status || 500).json({
    status: "error",
    message: err.message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
