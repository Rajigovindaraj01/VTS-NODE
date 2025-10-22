let count = 0;

function recursiveNextTick() {
    count++;
    console.log(`Next tick recursion count: ${count}`);

    if (count < 5) {
        process.nextTick(recursiveNextTick);
    }
}

console.log("Start recursion");
recursiveNextTick();
console.log("End recursion");
