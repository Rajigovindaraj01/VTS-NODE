const EventEmitter = require('events');

class PaymentProcessor extends EventEmitter {
  process(amount) {
    console.log(`💳 Processing payment of ₹${amount}...`);

    setTimeout(() => {
      if (amount <= 0) {
        this.emit('error', new Error('❌ Invalid payment amount.'));
      } else {
        this.emit('success', amount);
      }
    }, 1000);
  }
}

const payment = new PaymentProcessor();


payment.on('success', (amount) => {
  console.log(`✅ Payment of ₹${amount} processed successfully!`);
});


payment.on('error', (err) => {
  console.error(`⚠️ Payment failed: ${err.message}`);
});


payment.process(500);
payment.process(0); 
