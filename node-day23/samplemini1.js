const express = require('express');
const app = express();
app.use((req, res, next) => {
 console.log(`${req.method} ${req.url}`);
 next();
});
app.get('/', (req, res) => {
 res.send('Logged with console.log');
});
app.listen(3000, () => {
 console.log('Server listening on port 3000');
});