const { Duplex } = require('stream');

const echoStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(`✍️ Writable received: ${chunk.toString()}`);
    this.push(`Echo: ${chunk.toString()}`);
    callback(); 
  },
  read(size) {
  }
});


echoStream.on('data', (chunk) => {
  console.log(`📢 Readable emitted: ${chunk.toString()}`);
});

echoStream.write('Hello Duplex!');
echoStream.write('Node.js is awesome!');
echoStream.end();
