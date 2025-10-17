// Step 1: Create a simple EventEmitter class
class EventEmitter {
  constructor() {
    this.events = {}; 
  }


  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }


  emit(eventName, data) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach((cb) => cb(data));
    }
  }
}

// Step 2: Use the custom event emitter
const emitter = new EventEmitter();


emitter.on("greet", (name) => {
  console.log(`Hello, ${name}! 👋`);
});

emitter.on("greet", (name) => {
  console.log(`Welcome to the system, ${name}.`);
});

emitter.on("bye", (name) => {
  console.log(`Goodbye, ${name}! 👋`);
});

// Trigger events
emitter.emit("greet", "Rajeshwari");
emitter.emit("bye", "Rajeshwari");
