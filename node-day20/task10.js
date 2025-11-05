const express = require('express');
const app = express();
const PORT = 3010;

app.get('/stack-trace', (req, res, next) => {
  try {
    undefinedFunction(); 
  } catch (err) {
    console.error('Stack Trace:\n', err.stack);
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Error occurred. Check console for stack trace.',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
