const express = require('express');
const app = express();


const measureTime = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration}ms`);
  });

  next();
};


app.use(measureTime);


app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  setTimeout(() => {
    res.send('About page with simulated delay.');
  }, 500);
});

app.listen(3018, () => {
  console.log('Server running on http://localhost:3018');
});
