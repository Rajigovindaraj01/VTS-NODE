const fs = require('fs');
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    this.push(upperChunk);
    callback(); 
  }
});


const readableStream = fs.createReadStream('input.txt', 'utf8');
const writableStream = fs.createWriteStream('output.txt');


readableStream
  .pipe(upperCaseTransform)
  .pipe(writableStream)
  .on('finish', () => {
    console.log('✅ File transformed to uppercase successfully!');
  });

readableStream.on('error', (err) => console.error('❌ Read error:', err.message));
writableStream.on('error', (err) => console.error('❌ Write error:', err.message));
