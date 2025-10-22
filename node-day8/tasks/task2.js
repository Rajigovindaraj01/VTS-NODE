console.log("Start");

process.nextTick(() => {
    console.log("Inside nextTick");
});

setImmediate(() => {
    console.log("Inside setImmediate");
});

console.log("End");
