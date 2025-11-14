const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("error", (err) => {
  console.error("Emitter error:", err.message);
});

setTimeout(() => {
  emitter.emit("error", new Error("Async event error!"));
}, 1000);
