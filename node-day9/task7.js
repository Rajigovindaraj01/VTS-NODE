const fs = require('fs');

const filePath = 'output.txt';

console.log("Attempting to delete file...");


fs.unlink(filePath, (err) => {
    if (err) {
        console.error("Error deleting file:", err);
        return;
    }
    console.log(`File "${filePath}" deleted successfully!`);
});

console.log("Delete operation initiated, continuing execution...");
