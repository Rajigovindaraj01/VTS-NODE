const express = require('express');
const app = express();
const PORT = 3012;

process.emitWarning('This is a custom warning for debugging purposes');

app.get('/', (req, res) => {
  res.send('Check console for detailed warnings using --trace-warnings');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
