const EventEmitter = require('events');


const emitter = new EventEmitter();


const listener1 = () => console.log('👋 Hello!');
const listener2 = () => console.log('✨ Welcome!');
const listener3 = () => console.log('🚀 Keep going!');


emitter.on('greet', listener1);
emitter.on('greet', listener2);
emitter.on('greet', listener3);

console.log('🧩 Listener count before removal:', emitter.listenerCount('greet'));


emitter.emit('greet');


emitter.off('greet', listener2);

console.log('🧩 Listener count after removal:', emitter.listenerCount('greet'));
