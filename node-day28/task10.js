const fs = require("fs");

const data = fs.readFileSync("output.bin");
console.log(data);
console.log(data.toString());
