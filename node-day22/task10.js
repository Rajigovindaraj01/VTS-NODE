const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || "NO_KEY";
const DEBUG = process.env.DEBUG === "true";


function debugLog(message) {
  if (DEBUG) console.log("DEBUG:", message);
}


function requireApiKey(req, res, next) {
  const userKey = req.headers['x-api-key']; // client sends API key in header
  if (!userKey || userKey !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
  }
  next();
}


app.get('/', (req, res) => {
  debugLog("Home route accessed");
  res.send("Welcome to Thememarket ");
});


app.get('/secret-data', requireApiKey, (req, res) => {
  debugLog("Secret route accessed");
  res.json({
    message: "This is confidential data 🕵️‍♀️",
    timestamp: new Date()
  });
});


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
