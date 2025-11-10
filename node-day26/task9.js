const EventEmitter = require('events');


class Countdown extends EventEmitter {
  start(seconds) {
    console.log(`🚀 Countdown started for ${seconds} seconds...`);

    let current = seconds;

    const interval = setInterval(() => {
      this.emit('tick', current);
      current--;
      if (current < 0) {
        clearInterval(interval);
        this.emit('done');
      }
    }, 1000);
  }
}


const timer = new Countdown();

timer.on('tick', (timeLeft) => {
  console.log(`⏰ Time left: ${timeLeft} seconds`);
});

timer.on('done', () => {
  console.log('🎉 Countdown complete!');
});


timer.start(5);
