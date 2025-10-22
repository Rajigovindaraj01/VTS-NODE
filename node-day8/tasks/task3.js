const fs = require('fs');

console.log("Before reading the file"); // Runs first (synchronous)


fs.readFile(__filename, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("During reading the file (callback)"); // Runs after I/O completes
});

console.log("After initiating file read"); // Runs immediately after fs.readFile
