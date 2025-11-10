const EventEmitter = require('events');


class OrderSystem extends EventEmitter {
  placeOrder(item, quantity) {
    console.log(`🛍️ Placing order for ${quantity} × ${item}...`);
    this.emit('orderPlaced', item, quantity);
  }

  deliverOrder(item) {
    console.log(`🚚 Delivering your ${item}...`);
    this.emit('orderDelivered', item);
  }
}


const order = new OrderSystem();


order.on('orderPlaced', (item, quantity) => {
  console.log(`✅ Order confirmed for ${quantity} × ${item}`);
});

order.on('orderDelivered', (item) => {
  console.log(`🎉 ${item} has been delivered successfully!`);
});


order.placeOrder('Mangoes', 3);
order.deliverOrder('Mangoes');
