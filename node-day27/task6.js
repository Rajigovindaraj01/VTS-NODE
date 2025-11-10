const fs = require('fs');


const writableStream = fs.createWriteStream('userInput.txt');

console.log("✍️ Type something (type 'exit' to finish):");

process.stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input.toLowerCase() === 'exit') {
    console.log('✅ Writing completed. Check userInput.txt');
    writableStream.end(); 
    process.exit();       
  } else {
    writableStream.write(input + '\n'); 
  }
});

writableStream.on('error', (err) => {
  console.error('❌ Error writing to file:', err.message);
});
