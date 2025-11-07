
const dotenv = require('dotenv');
dotenv.config(); 


const port = process.env.PORT;
const apiKey = process.env.API_KEY;

console.log("Environment Variables Loaded:");
console.log("PORT:", port);
console.log("API_KEY:", apiKey);
