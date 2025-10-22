
const fs = require('fs');
const path = require('path');


const fileName = process.argv[2];

if (!fileName) {
  console.error('Error: Please provide a file name as a command-line argument.');
  process.exit(1); 
}


const filePath = path.resolve(__dirname, fileName);


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('File content:\n', data);
});
