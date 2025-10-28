const express = require('express');
const app = express();
const router = express.Router();


const routerLogger = (req, res, next) => {
  console.log(`Router middleware: ${req.method} ${req.url}`);
  next(); 
};


router.use(routerLogger);


router.get('/about', (req, res) => {
  res.send('About page inside router!');
});

router.get('/contact', (req, res) => {
  res.send('Contact page inside router!');
});

app.use('/info', router);


app.get('/', (req, res) => {
  res.send('Home page — no router middleware here.');
});

app.listen(3020, () => {
  console.log('Server running on http://localhost:3020');
});
