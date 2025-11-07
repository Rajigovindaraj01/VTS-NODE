const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || "NO_KEY";
const APP_NAME = process.env.APP_NAME || "MyApp";


app.get('/', (req, res) => {
  res.send(`Welcome to ${APP_NAME} `);
});


app.get('/config', (req, res) => {
  res.json({
    appName: APP_NAME,
    apiKey: API_KEY,
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
