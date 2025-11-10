const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt', 'utf8');


writableStream.write('Hello, Rajeshwari!\n');
writableStream.write('This is written using a writable stream.\n');
writableStream.write('Node.js streams are efficient and powerful.\n');

writableStream.end('✅ Writing completed.\n');


writableStream.on('finish', () => {
  console.log('💾 All data has been written to output.txt successfully!');
});

writableStream.on('error', (err) => {
  console.error('❌ Error writing to file:', err.message);
});
