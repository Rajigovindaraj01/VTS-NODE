require('dotenv').config();
const port = process.env.PORT || 3000;
const secret = process.env.API_SECRET || 'defaultsecret';
console.log(`App will run on port: ${port}`);
console.log(`API secret key: ${secret}`);
