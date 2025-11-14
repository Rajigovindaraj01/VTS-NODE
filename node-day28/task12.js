const buf = Buffer.alloc(10);
buf.fill(65); // ASCII value for 'A'
console.log(buf.toString());  // AAAAAAAAAA
