const fs = require('fs');


const readableStream = fs.createReadStream('example.txt', 'utf8');


const writableStream = fs.createWriteStream('copied.txt', 'utf8');


readableStream.pipe(writableStream);


readableStream.on('error', (err) => {
  console.error('❌ Error reading file:', err.message);
});

writableStream.on('finish', () => {
  console.log('✅ File copied successfully using pipe!');
});
