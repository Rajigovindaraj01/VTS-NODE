
const fs = require('fs');
const inputFile = 'input.txt';
const outputFile = 'output.txt';


fs.readFile(inputFile, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading file:', readErr.message);
    return;
  }
  console.log(`✅ Read from ${inputFile}:`);
  console.log(data);

  const modifiedData = `${data}\n\nTimestamp: ${new Date().toLocaleString()}`;


  fs.writeFile(outputFile, modifiedData, (writeErr) => {
    if (writeErr) {
      console.error('Error writing file:', writeErr.message);
      return;
    }
    console.log(`✅ Modified content written to ${outputFile}`);
  });
});
