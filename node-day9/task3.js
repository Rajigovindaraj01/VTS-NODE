const fs = require('fs');

const content = "Hello, this is a sample text written asynchronously!";

console.log("Start writing file...");


fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File written successfully!");
});

console.log("File write initiated, continuing execution...");
