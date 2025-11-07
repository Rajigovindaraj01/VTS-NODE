console.log("===== TASK 1: SCOPES =====");

// Global scope
let globalVar = "I am global";

function showScopes() {
    let functionVar = "I am function scoped";
    console.log("Inside function:", globalVar);    // global accessible
    console.log("Inside function:", functionVar);  // function scoped
}
showScopes();
console.log("Global scope:", globalVar);
// console.log(functionVar); // Error: functionVar not defined

// Block scope
{
    let blockVar = "I am block scoped";
    const blockConst = "I am a block constant";
    console.log("Inside block:", blockVar);
    console.log("Inside block:", blockConst);
}
// console.log(blockVar); // Error: blockVar not defined
// console.log(blockConst); // Error: blockConst not defined

console.log("\n===== TASK 2: VAR, LET, CONST =====");

// VAR
var x = 10;
if (true) {
    var x = 20; // same variable, function/global scoped
    console.log("VAR inside block:", x);
}
console.log("VAR outside block:", x);

// LET
let y = 10;
if (true) {
    let y = 20; // block scoped, different variable
    console.log("LET inside block:", y);
}
console.log("LET outside block:", y);

// CONST
const z = 10;
// z = 20; // Error
const obj = { name: "Raji" };
obj.name = "Rajeshwari"; // allowed
console.log("CONST object mutation:", obj);
if (true) {
    const z = 30; // block scoped
    console.log("CONST inside block:", z);
}
console.log("CONST outside block:", z);

console.log("\n===== TASK 3: VAR HOISTING =====");

console.log(aVar); // undefined
var aVar = 100;
console.log(aVar); // 100

function varHoist() {
    console.log(bVar); // undefined
    var bVar = 200;
    console.log(bVar); // 200
}
varHoist();

console.log("\n===== TASK 4: TDZ WITH LET/CONST =====");

// LET TDZ
try {
    console.log(aLet); // ReferenceError
} catch (err) {
    console.log("LET TDZ error:", err.message);
}
let aLet = 10;
console.log(aLet);

// CONST TDZ
try {
    console.log(aConst); // ReferenceError
} catch (err) {
    console.log("CONST TDZ error:", err.message);
}
const aConst = 20;
console.log(aConst);

// TDZ in a block
if (true) {
    try {
        console.log(blockLet); // ReferenceError
    } catch (err) {
        console.log("Block LET TDZ error:", err.message);
    }

    let blockLet = 30;
    const blockConst = 40;

    console.log("Block LET:", blockLet);
    console.log("Block CONST:", blockConst);
}
