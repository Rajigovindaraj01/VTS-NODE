const fs = require('fs');

// Step 1: Read a file asynchronously
fs.readFile('input.txt', 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading file:', readErr.message);
    return;
  }

  console.log('File read successfully!');

  // Step 2: Write the read content into another file
  fs.writeFile('output.txt', data.toUpperCase(), (writeErr) => {
    if (writeErr) {
      console.error('Error writing file:', writeErr.message);
      return;
    }

    console.log('File written successfully with uppercase content! ✅');
  });
});
