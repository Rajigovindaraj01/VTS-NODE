const math = require('./math');

const a= 12;
const b=4;
console.log('a=',a,',b=',b);

console.log('Add:' ,math.add(a,b));
console.log('Subtract:', math.subtract(a, b));
console.log('Multiply:', math.multiply(a, b));
console.log('Divide:', math.divide(a, b));

console.log('Divide by zero:', math.divide(5, 0));