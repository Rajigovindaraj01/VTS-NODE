const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || "NO_KEY";
const DEBUG = process.env.DEBUG === "true"; // convert string to boolean


function debugLog(message) {
  if (DEBUG) {
    console.log("DEBUG:", message);
  }
}

debugLog("Server configuration loaded:");
debugLog(`PORT=${PORT}, API_KEY=${API_KEY}`);

app.get('/', (req, res) => {
  debugLog("Home route was called");
  res.send("Hello Raji! Express server running 🚀");
});

app.get('/config', (req, res) => {
  debugLog("Config route was called");
  res.json({
    appName: "Thememarket",
    apiKey: API_KEY,
    port: PORT
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
