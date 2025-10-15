const fs = require('fs');
const events = require('events');


const eventEmitter = new events.EventEmitter();

eventEmitter.on('start', () => {
  const message = `Event "start" triggered at ${new Date().toLocaleString()}\n`;

  fs.appendFile('events.log', message, (err) => {
    if (err) {
      console.error('Error writing to events.log:', err);
    } else {
      console.log('Event logged successfully!');
    }
  });
});


eventEmitter.emit('start');
