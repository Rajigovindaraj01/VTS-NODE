const express = require('express');
const app = express();


const blockedIPs = ['123.45.67.89', '111.222.333.444'];


const blockIPMiddleware = (req, res, next) => {
  const clientIP = req.ip;
  if (blockedIPs.includes(clientIP)) {
    return res.status(403).send('Access denied: Your IP is blocked.');
  }

  next(); 
};


app.use(blockIPMiddleware);


app.get('/', (req, res) => {
  res.send('Welcome! Your IP is allowed.');
});

app.listen(3012, () => {
  console.log('Server running on port http://localhost:3012');
});
