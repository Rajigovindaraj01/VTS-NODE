console.log("----- Function Declaration -----");

sayHi(); // Works because of hoisting

function sayHi() {
    console.log("Hello from function declaration!");
}

sayHi(); // Works normally
