const fs = require('fs');

const content = "Hello, this is a sample text written synchronously!";

console.log("Start writing file...");

try {
    fs.writeFileSync('output_sync.txt', content, 'utf8');
    console.log("File written successfully!");
} catch (err) {
    console.error("Error writing file:", err);
}

console.log("File write completed, continuing execution...");
