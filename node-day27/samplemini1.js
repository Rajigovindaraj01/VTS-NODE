const fs = require('fs');
const readableStream = fs.createReadStream('sample.txt', { encoding: 'utf8' });
readableStream.on('data', (chunk) => {
 console.log('Chunk received:', chunk);
});
readableStream.on('end', () => {
 console.log('Finished reading the file.');
});
readableStream.on('error', (err) => {
 console.error('Error:', err.message);});
