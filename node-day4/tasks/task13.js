const fs = require('fs');
const events = require('events');


const eventEmitter = new events.EventEmitter();


const filePath = 'events.log';


eventEmitter.on('changed', (curr, prev) => {
  console.log(`The file "${filePath}" was changed!`);
  console.log(`Previous size: ${prev.size} bytes`);
  console.log(`Current size: ${curr.size} bytes`);
});

fs.watchFile(filePath, { interval: 1000 }, (curr, prev) => {

  eventEmitter.emit('changed', curr, prev);
});

console.log(`Watching for changes in "${filePath}"...`);
