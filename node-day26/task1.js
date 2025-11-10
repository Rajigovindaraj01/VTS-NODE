const EventEmitter = require('events');


const emitter = new EventEmitter();


emitter.on('greet', () => {
  console.log('Hello, Rajeshwari! 👋 Event received successfully.');
});


emitter.emit('greet');
