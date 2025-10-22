console.log("Start");

// Initialize a counter
let count = 0;

// Start an interval that runs every 1 second
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval running: ${count}`);

    // Stop the interval after 5 executions
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval cleared");
    }
}, 1000);

console.log("After setting interval");
