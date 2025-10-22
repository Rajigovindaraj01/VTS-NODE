console.log("Start");

const expectedDelay = 100; // milliseconds
const startTime = Date.now();

setTimeout(() => {
    const actualDelay = Date.now() - startTime;
    console.log(`Expected delay: ${expectedDelay}ms`);
    console.log(`Actual delay: ${actualDelay}ms`);
    console.log(`Event loop delay: ${actualDelay - expectedDelay}ms`);
}, expectedDelay);

// Simulate CPU-intensive blocking task
const blockTime = 500; // ms
const blockStart = Date.now();
while (Date.now() - blockStart < blockTime) {
    // Busy-wait loop to block event loop
}
console.log("Blocking task finished");
