const fs = require('fs');

console.log("Start of script");


fs.readFile(__filename, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("Inside fs.readFile callback");
});

console.log("After initiating fs.readFile");


process.nextTick(() => {
    console.log("Inside process.nextTick");
});

Promise.resolve().then(() => {
    console.log("Inside Promise.then");
});
