const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3004, () => {
  console.log('Server running on http://localhost:3004');
});
