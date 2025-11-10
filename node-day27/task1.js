const fs = require('fs');

const readableStream = fs.createReadStream('example.txt', 'utf8');


readableStream.on('data', (chunk) => {
  console.log('📦 Received chunk:');
  console.log(chunk);
});


readableStream.on('end', () => {
  console.log('✅ Finished reading the file.');
});


readableStream.on('error', (err) => {
  console.error('❌ Error reading file:', err.message);
});
