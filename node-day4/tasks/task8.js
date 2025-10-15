const path = require('path');


const directory = 'output';
const fileName = 'log.txt';

const fullPath = path.join(__dirname, directory, fileName);

console.log('Full file path:', fullPath);
