console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

setImmediate(() => {
    console.log("Inside setImmediate");
});

Promise.resolve().then(() => {
    console.log("Inside Promise then (microtask 1)");
}).then(() => {
    console.log("Inside Promise then (microtask 2)");
});

console.log("End");
