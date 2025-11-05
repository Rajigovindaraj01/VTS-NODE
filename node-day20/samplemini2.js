const express = require('express');
const app = express();
const PORT = 3000;

app.get('/error', (req, res) => {
 throw new Error('Something went wrong!');
});

app.use((err, req, res, next) => {
 console.error('Error caught:', err.message);
 res.status(500).json({ error: err.message });
});
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});
