console.log(message); 
var message = "Hello, Hoisting!";
try {
 console.log(greeting); 
} catch (err) {
 console.log(err.message);
}
let greeting = "Hi, Let!";
function sayHi() {
 console.log("Hi from function declaration!");
}
sayHi();
const sayBye = function () {
 console.log("Bye from function expression!");
};
sayBye();