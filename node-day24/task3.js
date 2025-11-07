console.log("---- VAR HOISTING ----");
console.log(aVar); // undefined (declaration hoisted)
var aVar = 10;
console.log(aVar); // 10

function varHoisting() {
    console.log(bVar); // undefined (hoisted inside function)
    var bVar = 20;
    console.log(bVar); // 20
}
varHoisting();

// Hoisting inside block (var ignores block scope)
if (true) {
    console.log(cVar); // undefined
    var cVar = 30;
}
console.log(cVar); // 30 (accessible outside block)

console.log("\n---- LET HOISTING ----");
try {
    console.log(aLet); // ReferenceError: Cannot access before initialization
} catch (err) {
    console.log(err.message);
}
let aLet = 10;
console.log(aLet); // 10

function letHoisting() {
    try {
        console.log(bLet); // ReferenceError
    } catch (err) {
        console.log(err.message);
    }
    let bLet = 20;
    console.log(bLet); // 20
}
letHoisting();

// Let is block scoped
if (true) {
    let cLet = 30;
    console.log(cLet); // 30
}
// console.log(cLet); // ReferenceError: cLet is not defined

console.log("\n---- CONST HOISTING ----");
try {
    console.log(aConst); // ReferenceError
} catch (err) {
    console.log(err.message);
}
const aConst = 100;
console.log(aConst); // 100

function constHoisting() {
    try {
        console.log(bConst); // ReferenceError
    } catch (err) {
        console.log(err.message);
    }
    const bConst = 200;
    console.log(bConst); // 200
}
constHoisting();

// Const is block scoped
if (true) {
    const cConst = 300;
    console.log(cConst);
}
// console.log(cConst); // ReferenceError: cConst is not defined
