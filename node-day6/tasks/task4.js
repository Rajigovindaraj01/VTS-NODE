const fs = require('fs');

fs.writeFile('output.txt', 'Hello, this is written asynchronously!', (err) => {
  if (err) {
    console.error('Error writing file:', err.message);
    return;
  }
  console.log('File written successfully! ✅');
});
