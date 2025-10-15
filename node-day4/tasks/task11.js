const events = require('events');


const eventEmitter = new events.EventEmitter();


eventEmitter.on('start', () => {
  console.log('The "start" event has been triggered!');
});

eventEmitter.emit('start');
