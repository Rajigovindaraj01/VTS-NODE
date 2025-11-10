const fs = require('fs');

const readableStream = fs.createReadStream('largefile.txt');

let totalBytes = 0;

readableStream.on('data', (chunk) => {
  totalBytes += chunk.length; 
  console.log(`📦 Received ${chunk.length} bytes...`);
});

readableStream.on('end', () => {
  console.log(`✅ Finished reading file.`);
  console.log(`📊 Total bytes read: ${totalBytes}`);
});

readableStream.on('error', (err) => {
  console.error('❌ Error reading file:', err.message);
});
