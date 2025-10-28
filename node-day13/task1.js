const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
};

app.use(loggerMiddleware);
app.get('/', (req, res) => {
  res.send('Hello, Middleware!');
});

app.listen(3010, () => {
  console.log('Server running on port http://localhost:3010');
});
