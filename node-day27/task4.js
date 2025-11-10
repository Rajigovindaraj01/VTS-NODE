const fs = require('fs');


const readableStream = fs.createReadStream('input.txt', 'utf8');


const writableStream = fs.createWriteStream('output.txt', 'utf8');


readableStream.pipe(writableStream);

readableStream.on('error', (err) => {
  console.error('❌ Read Error:', err.message);
});


writableStream.on('error', (err) => {
  console.error('❌ Write Error:', err.message);
});

writableStream.on('finish', () => {
  console.log('✅ File streaming completed successfully!');
});
