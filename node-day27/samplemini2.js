const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt');
const lines = ['Line 1', 'Line 2', 'Line 3'];
lines.forEach(line => {
 writableStream.write(line + '\n');
});
writableStream.end();
writableStream.on('finish', () => {
 console.log('All lines written successfully.');
});
writableStream.on('error', (err) => {
 console.error('Write error:', err.message);
});
