const fs = require('fs');

const jsonFilePath = './data.json'; 

console.log("Start reading JSON file...");


fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    try {
        const parsedData = JSON.parse(data);
        console.log("Parsed JSON data:", parsedData);
    } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
    }
});

console.log("File read initiated, continuing execution...");
