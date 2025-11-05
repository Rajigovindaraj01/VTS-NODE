const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.get('/data', (req, res) => {
 res.json({ message: 'CORS enabled for all origins' });
});
app.listen(PORT, () => {console.log(`Server running on port http://localhost:${PORT}`);
});
