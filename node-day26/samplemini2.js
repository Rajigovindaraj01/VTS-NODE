const EventEmitter = require('events');
class OrderSystem extends EventEmitter {
 placeOrder(orderId, product) {
 console.log(`Order received: ${orderId} for ${product}`);

 this.emit('orderPlaced', { orderId, product });
 }
}
const orderSystem = new OrderSystem();
orderSystem.on('orderPlaced', (order) => {
 console.log(`Processing order ${order.orderId} for ${order.product}`);
});
orderSystem.placeOrder('9876', 'Mobile');
