const EventEmitter = require('events');


class ChatEmitter extends EventEmitter {
  sendMessage(username, message) {
    console.log(`💌 ${username} says: "${message}"`);
    this.emit('message', username, message);
  }
}


const chat = new ChatEmitter();


chat.on('message', (user, msg) => {
  console.log(`📢 [Listener 1] ${user}: ${msg}`);
});

chat.on('message', (user, msg) => {
  console.log(`💬 [Listener 2] Message received from ${user}: "${msg}"`);
});

chat.on('message', (user, msg) => {
  console.log(`🛰️ [Listener 3] Broadcasting to all users: ${msg}`);
});

chat.sendMessage('Rajeshwari', 'Hello everyone!');
chat.sendMessage('Priya', 'Hi Raji! How are you?');
chat.sendMessage('Karthik', 'Hey folks! What’s up?');
