const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'output', 'log.txt');


fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error('Error getting file info:', err);
  } else {
    console.log(`File: ${filePath}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created: ${stats.birthtime}`);
    console.log(`Last Modified: ${stats.mtime}`);
    console.log(`Is File: ${stats.isFile()}`);
    console.log(`Is Directory: ${stats.isDirectory()}`);
  }
});
