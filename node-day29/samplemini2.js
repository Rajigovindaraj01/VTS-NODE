const express = require('express');
const app = express();
app.get('/', (req, res) => {
 throw new Error('Something went wrong!');
});
app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).send({ error: 'Internal Server Error', message: err.message });
});
app.listen(3000, () => {
 console.log('Server running on port http://localhost:3000');
});
