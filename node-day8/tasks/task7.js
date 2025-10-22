const fs = require('fs');

console.log("Start");

// Schedule async I/O
fs.readFile(__filename, 'utf8', () => {
    console.log("File read callback executed");
});

// Long-running CPU task (blocking)
function blockingTask() {
    const start = Date.now();
    while (Date.now() - start < 5000) { // 5 seconds busy loop
        // CPU is busy
    }
    console.log("Blocking task finished");
}

blockingTask();

console.log("End");
