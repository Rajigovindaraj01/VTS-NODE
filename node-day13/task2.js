const express = require('express');
const app = express();


const customHeaderMiddleware = (req, res, next) => {
  res.setHeader('X-Powered-By', 'Rajeshwari-Express-App');
  next();
};


app.use(customHeaderMiddleware);


app.get('/', (req, res) => {
  res.send('Custom header added!');
});

app.listen(3011, () => {
  console.log('Server running on port http://localhost:3011');
});
