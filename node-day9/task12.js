const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'app.log');

/**
 * Appends a log entry with timestamp to a file
 * @param {string} message - The log message
 */
function log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;

    fs.appendFile(logFilePath, logEntry, 'utf8', (err) => {
        if (err) {
            console.error("Error writing log:", err.message);
            return;
        }
        console.log("Log entry added.");
    });
}


log("Server started");
log("User logged in");
log("An error occurred");
