const express = require('express');
const app = express();
const PORT = 3012;
app.get('/cause-error', (req, res, next) => {
    const err = new Error('Oops! Something went wrong.');
 next(err);
});
app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).send('Internal Server Error');
});
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});
