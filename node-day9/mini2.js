
const fs = require('fs');
const path = require('path');


const logFile = path.resolve(__dirname, 'app.log');

/**
 * Logs a message to the log file with a timestamp
 * @param {string} message - The message to log
 */
function logMessage(message) {
  const timestamp = new Date().toISOString(); 
  const logEntry = `[${timestamp}] ${message}\n`;


  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err.message);
      return;
    }
    console.log('Message logged successfully.');
  });
}


logMessage('Server started');
logMessage('User logged in');
logMessage('Error: Invalid input');
