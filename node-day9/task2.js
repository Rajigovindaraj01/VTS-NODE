const fs = require('fs');

console.log("Start reading file");


try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log("File content:\n", data);
} catch (err) {
    console.error("Error reading file:", err);
}

console.log("File read completed, continuing execution...");
