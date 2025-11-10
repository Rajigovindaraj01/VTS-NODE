const EventEmitter = require('events');

const emitter = new EventEmitter();

function sayHello() {
  console.log('👋 Hello, Rajeshwari!');
}


emitter.on('greet', sayHello);
emitter.on('greet', () => {
  console.log('😊 Nice to meet you!');
});


console.log('Before removing listener:');
emitter.emit('greet');

emitter.off('greet', sayHello);


console.log('\nAfter removing specific listener:');
emitter.emit('greet');
