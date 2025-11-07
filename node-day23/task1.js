const express = require('express');
const app = express();


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); 
});


app.get('/', (req, res) => {
  res.send("Hello Raji! This is the home route.");
});

app.get('/about', (req, res) => {
  res.send("This is the about page.");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
