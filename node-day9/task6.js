const fs = require('fs');

const filePath = 'output.txt';

console.log("Checking if file exists...");


if (fs.existsSync(filePath)) {
    console.log(`File "${filePath}" exists.`);
} else {
    console.log(`File "${filePath}" does not exist.`);
}
