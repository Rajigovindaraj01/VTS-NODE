const fs = require("fs");

// Read image as buffer
const imgBuffer = fs.readFileSync("myImage.png");

// Convert to Base64 to send in API response
const base64Image = imgBuffer.toString("base64");

console.log("Image size:", imgBuffer.length);
