const add = (a,b)=>a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b)=>b!==0 ? a/b :"Cannot divide by zero";

const a=10,b=5;
console.log(`Add: ${add(a, b)}`);
console.log(`Subtract: ${subtract(a, b)}`);
console.log(`Multiply: ${multiply(a, b)}`);
console.log(`Divide: ${divide(a, b)}`);
