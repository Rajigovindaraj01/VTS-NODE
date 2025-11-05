const express = require('express');
const app = express();
const PORT = 3013;

let memoryLeak = [];

app.get('/leak', (req, res) => {
  for (let i = 0; i < 10000; i++) {
    memoryLeak.push({ data: new Array(1000).fill('*') });
  }
  res.send('Memory leak simulated. Use Chrome DevTools or --inspect to monitor memory usage.');
});

app.get('/', (req, res) => {
  res.send('Go to /leak to simulate a memory leak and analyze performance.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
