const express = require('express');
const app = express();
const PORT = 3012;
app.get('/profile/:username', (req, res) => {
 const { username } = req.params;
 res.send(`Welcome to ${username}'s profile`);
});
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});
