const fs = require('fs');

const additionalContent = "\nThis text is appended asynchronously!";

console.log("Start appending to file...");


fs.appendFile('output.txt', additionalContent, 'utf8', (err) => {
    if (err) {
        console.error("Error appending file:", err);
        return;
    }
    console.log("Text appended successfully!");
});

console.log("Append operation initiated, continuing execution...");
