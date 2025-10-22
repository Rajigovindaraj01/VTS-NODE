const fs = require('fs');

console.log("Start reading file");


fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:\n", data);
});

console.log("File read initiated, continuing execution...");
