const src = Buffer.from("ABCDEF");
const dest = Buffer.alloc(10);
src.copy(dest, 2);
console.log(dest.toString());
