const express = require('express');
const app = express();


app.use(express.static('public'));


app.listen(3011, () => {
  console.log('Static server running on http://localhost:3011');
});
