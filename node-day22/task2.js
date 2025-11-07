const dotenv = require('dotenv');
dotenv.config();  

const port = process.env.PORT;
const apiKey = process.env.API_KEY;

console.log(`Server running on port: ${port}`);
console.log(`Using API key: ${apiKey}`);
