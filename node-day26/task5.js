const EventEmitter = require('events');


const emitter = new EventEmitter();


emitter.on('bye', () => console.log('👋 Goodbye, Rajeshwari!'));
emitter.on('bye', () => console.log('✨ See you soon!'));
emitter.on('bye', () => console.log('🚀 Keep coding and shining!'));


console.log('Before removing all listeners:');
emitter.emit('bye');

emitter.removeAllListeners('bye'); 


console.log('\nAfter removing all listeners:');
emitter.emit('bye');
