const fs = require('fs');

console.log("Start");


fs.readFile(__filename, () => {
    console.log("Inside readFile callback");

    setImmediate(() => {
        console.log("Inside setImmediate nested in readFile");
    });
});

setImmediate(() => {
    console.log("Outside setImmediate");
});

console.log("End");
