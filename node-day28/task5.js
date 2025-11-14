const b1 = Buffer.from("Hello ");
const b2 = Buffer.from("World");
const result = Buffer.concat([b1, b2]);
console.log(result.toString());
