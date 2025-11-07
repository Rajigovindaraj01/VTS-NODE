const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 
'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.get('/', (req, res) => {
 res.send('Morgan logging to file!');
});
app.listen(3000, () => {
 console.log('Server started on port 3000');
});
