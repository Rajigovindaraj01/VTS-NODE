console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout (macrotask)");
}, 0);

process.nextTick(() => {
    console.log("Inside process.nextTick (highest priority microtask)");
});

Promise.resolve().then(() => {
    console.log("Inside Promise.then (microtask)");
}).then(() => {
    console.log("Inside chained Promise.then (microtask)");
});

console.log("End");
