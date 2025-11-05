const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
 const message = 'Hello, debugging!';
 console.log('Inside GET / route'); // breakpoint here
 res.send(message);
});
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});