const EventEmitter = require('events');


const emitter = new EventEmitter();


emitter.on('order', (item, quantity, price) => {
  console.log(`🛒 Order received: ${quantity} × ${item}`);
  console.log(`💰 Total price: ₹${quantity * price}`);
  console.log('✅ Your order will be delivered soon, Rajeshwari!');
});


emitter.emit('order', 'Apples', 5, 30);
