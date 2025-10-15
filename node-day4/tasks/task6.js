const fs = require('fs');
const path = require('path');


const sourcePath = path.join(__dirname, 'log.txt');
const destinationPath = path.join(__dirname, 'output', 'log.txt');


fs.rename(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Error moving file:', err);
  } else {
    console.log('log.txt has been moved to the output folder successfully!');
  }
});
