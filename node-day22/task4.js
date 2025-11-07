
const dotenv = require('dotenv');
dotenv.config(); 


const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello Raji! Express server running successfully ');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
