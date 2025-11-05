const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const corsOptions = {
 origin: 'http://localhost:4000',
 methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));
app.get('/data', (req, res) => {
 res.json({ message: 'CORS enabled for http://localhost:4000 with GET and POST' });
});
app.post('/data', (req, res) => {
 res.json({ message: 'POST request accepted' });
});
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});