const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.on('greet', () => {
  console.log('👋 Hello, Rajeshwari!');
});


emitter.on('greet', () => {
  console.log('😊 Hope you are having a great day!');
});


emitter.on('greet', () => {
  console.log(' Keep learning and building amazing projects!');
});

emitter.emit('greet');
