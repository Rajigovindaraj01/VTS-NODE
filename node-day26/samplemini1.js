const EventEmitter = require('events');
const ticker = new EventEmitter();
ticker.on('tick', (time) => {
 console.log(`Tick at ${time}`);
});
setInterval(() => {
 ticker.emit('tick', new Date().toLocaleTimeString());
}, 1000);