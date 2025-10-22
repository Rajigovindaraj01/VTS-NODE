const fs = require('fs');

const sourceFile = 'source.txt'; 
const destinationFile = 'destination.txt'; 

console.log("Starting file copy...");


fs.readFile(sourceFile, 'utf8', (readErr, data) => {
    if (readErr) {
        console.error("Error reading source file:", readErr.message);
        return;
    }


    fs.writeFile(destinationFile, data, 'utf8', (writeErr) => {
        if (writeErr) {
            console.error("Error writing to destination file:", writeErr.message);
            return;
        }
        console.log(`File copied successfully from "${sourceFile}" to "${destinationFile}"`);
    });
});

console.log("File copy operation initiated...");
