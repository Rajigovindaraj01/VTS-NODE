const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.once('welcome', () => {
  console.log('🎉 Welcome, Rajeshwari! This will only show once.');
});


emitter.emit('welcome');
emitter.emit('welcome');
emitter.emit('welcome');
