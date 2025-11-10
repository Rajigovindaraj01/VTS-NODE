const fs = require('fs');


const readableStream = fs.createReadStream('bigfile.txt');
const writableStream = fs.createWriteStream('copy.txt');


readableStream.on('data', (chunk) => {
  const canWrite = writableStream.write(chunk);


  if (!canWrite) {
    console.log('⏸️ Pausing readable stream (backpressure detected)...');
    readableStream.pause();
  }
});


writableStream.on('drain', () => {
  console.log('▶️ Writable drained — resuming readable stream...');
  readableStream.resume();
});


readableStream.on('end', () => {
  writableStream.end();
  console.log('✅ File copy completed successfully!');
});

readableStream.on('error', (err) => console.error('❌ Read error:', err.message));
writableStream.on('error', (err) => console.error('❌ Write error:', err.message));
