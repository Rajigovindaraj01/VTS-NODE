console.log("Start of script");

// process.nextTick: highest priority microtask
process.nextTick(() => {
    console.log("Inside process.nextTick");
});

// Promise: microtask
Promise.resolve().then(() => {
    console.log("Inside Promise.then");
});

// setTimeout: macrotask, timers phase
setTimeout(() => {
    console.log("Inside setTimeout (0ms)");
}, 0);

// setImmediate: macrotask, check phase
setImmediate(() => {
    console.log("Inside setImmediate");
});

console.log("End of script");
