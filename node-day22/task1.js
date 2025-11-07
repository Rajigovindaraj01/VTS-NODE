
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const db = process.env.DB_URL;

console.log(`Server running on port ${port}`);
console.log(`Database connected: ${db}`);
