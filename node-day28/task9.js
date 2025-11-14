const fs = require("fs");

const buf = Buffer.from("Binary Data Example");

fs.writeFileSync("output.bin", buf);
console.log("Binary file saved");
