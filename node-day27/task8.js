const fs = require('fs');
const readline = require('readline');


const readableStream = fs.createReadStream('sample.txt', 'utf8');


const rl = readline.createInterface({
  input: readableStream,
  crlfDelay: Infinity 
});

let lineCount = 0;


rl.on('line', (line) => {
  lineCount++;
  console.log(`📄 Line ${lineCount}: ${line}`);
});

rl.on('close', () => {
  console.log(`✅ Finished reading file. Total lines: ${lineCount}`);
});

readableStream.on('error', (err) => {
  console.error('❌ Error reading file:', err.message);
});
