console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

setImmediate(() => {
    console.log("Inside setImmediate");
});

console.log("End");
