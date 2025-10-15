const fs = require('fs');
const os = require('os');
const path = require('path');


const logFilePath = path.join(__dirname, 'uptime.log');

console.log('Server Uptime Logger started...');

function logUptime() {
  const now = new Date().toLocaleString();
  const uptimeSeconds = os.uptime();

  const logMessage = `[${now}] Uptime: ${uptimeSeconds} seconds\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing uptime log:', err);
    } else {
      console.log('Uptime logged:', logMessage.trim());
    }
  });
}

setInterval(logUptime, 10000);
