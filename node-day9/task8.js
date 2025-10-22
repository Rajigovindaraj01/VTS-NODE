const fs = require('fs');

const dirPath = 'new_directory';

console.log("Attempting to create directory...");

fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        console.error("Error creating directory:", err);
        return;
    }
    console.log(`Directory "${dirPath}" created successfully!`);
});

console.log("Directory creation initiated, continuing execution...");
