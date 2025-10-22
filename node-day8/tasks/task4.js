console.log("Start");

// First timer
setTimeout(() => {
    console.log("Timer 1");

    // Nested timer inside Timer 1
    setTimeout(() => {
        console.log("Nested Timer 1");
    }, 0);

}, 0);

// Second timer
setTimeout(() => {
    console.log("Timer 2");
}, 0);

console.log("End");
