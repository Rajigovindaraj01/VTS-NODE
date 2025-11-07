console.log("===== FUNCTION HOISTING & VARIABLES =====");

console.log("\n--- Function Declaration Hoisting ---");
greetDeclaration();

function greetDeclaration() {
    console.log("Hello from function declaration!");
}

console.log("\n--- Function Expression Hoisting ---");
try {
    greetExpression();
} catch (err) {
    console.log(err.message);
}

const greetExpression = function() {
    console.log("Hello from function expression!");
};

greetExpression();

console.log("\n--- Arrow Function Hoisting ---");
try {
    greetArrow();
} catch (err) {
    console.log(err.message);
}

const greetArrow = () => console.log("Hello from arrow function!");
greetArrow();

console.log("\n--- VAR Hoisting ---");
console.log(aVar);
var aVar = 100;
console.log(aVar);

console.log("\n--- LET / CONST Hoisting (TDZ) ---");
try {
    console.log(aLet);
} catch (err) {
    console.log("LET TDZ error:", err.message);
}
let aLet = 200;
console.log(aLet);

try {
    console.log(aConst);
} catch (err) {
    console.log("CONST TDZ error:", err.message);
}
const aConst = 300;
console.log(aConst);

console.log("\n--- Closure Example ---");
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log("Counter:", counter());
console.log("Counter:", counter());
console.log("Counter:", counter());

console.log("\n--- Lexical Scope Example ---");
function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        let innerVar = "Inner";
        console.log("Access outerVar:", outerVar);
        console.log("Access innerVar:", innerVar);
    }

    innerFunction();
}
outerFunction();

console.log("\n--- Closure Remember Name ---");
function rememberName(name) {
    return function greet() {
        console.log(`Hello, ${name}!`);
    };
}

const greetRaji = rememberName("Raji");
greetRaji();
const greetRajeshwari = rememberName("Rajeshwari");
greetRajeshwari();
