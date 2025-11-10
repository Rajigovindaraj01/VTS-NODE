const fs = require('fs');


const readableStream = fs.createReadStream('input.txt', 'utf8');

let fileContent = '';


readableStream.on('data', (chunk) => {
  console.log(`📦 Received ${chunk.length} bytes of data.`);
  fileContent += chunk;
});


readableStream.on('end', () => {
  console.log('✅ Stream ended. Full content received:');
  console.log('---------------------------');
  console.log(fileContent);
  console.log('---------------------------');
});


readableStream.on('error', (err) => {
  console.error('❌ Error reading file:', err.message);
});
