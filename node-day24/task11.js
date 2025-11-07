function delayedGreeter(name) {
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
    }, 1000);
}

delayedGreeter("Raji");
delayedGreeter("Rajeshwari");

for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1500);
}

for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, 2000);
    })(i);
}

function createAsyncCounter() {
    let count = 0;
    return function() {
        setTimeout(function() {
            count++;
            console.log("Async counter:", count);
        }, 500);
    };
}

const asyncCounter = createAsyncCounter();
asyncCounter();
asyncCounter();
asyncCounter();

function createAsyncNameReminder(name) {
    return function() {
        setTimeout(function() {
            console.log(`Remembered name: ${name}`);
        }, 700);
    };
}

const remindRaji = createAsyncNameReminder("Raji");
const remindRajeshwari = createAsyncNameReminder("Rajeshwari");

remindRaji();
remindRajeshwari();
