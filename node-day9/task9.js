const fs = require('fs');

const dirPath = './new_directory'; 

console.log("Reading directory contents...");

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }
    console.log(`Contents of "${dirPath}":`);
    files.forEach((file, index) => {
        console.log(`${index + 1}. ${file}`);
    });
});

console.log("Directory read operation initiated, continuing execution...");
