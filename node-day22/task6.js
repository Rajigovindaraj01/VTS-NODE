const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY || "NO_KEY";

console.log("Loaded configuration:");
console.log("PORT:", PORT);
console.log("API_KEY:", API_KEY);
