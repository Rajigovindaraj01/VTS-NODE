console.log("Start");

process.nextTick(() => {
    console.log("Inside process.nextTick");
});

queueMicrotask(() => {
    console.log("Inside queueMicrotask");
});

console.log("End");
