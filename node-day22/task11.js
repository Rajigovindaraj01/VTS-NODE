const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const DEBUG = process.env.DEBUG === "true";
const NODE_ENV = process.env.NODE_ENV || "development";

function debugLog(message) {
  if (DEBUG) console.log("DEBUG:", message);
}

debugLog(`Running in ${NODE_ENV} mode`);

app.get('/', (req, res) => {
  res.send(`Hello! Running in ${NODE_ENV} mode on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
