const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('input.txt');


const writableStream = fs.createWriteStream('input.txt.gz');


const gzip = zlib.createGzip();

readableStream
  .pipe(gzip)
  .pipe(writableStream)
  .on('finish', () => {
    console.log('✅ File compressed successfully!');
  });


readableStream.on('error', (err) => console.error('❌ Read error:', err.message));
writableStream.on('error', (err) => console.error('❌ Write error:', err.message));
gzip.on('error', (err) => console.error('❌ Compression error:', err.message));
