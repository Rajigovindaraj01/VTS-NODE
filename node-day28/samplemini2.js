const fs = require('fs');
const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('World!');
const combined = Buffer.concat([buf1, buf2]);
fs.writeFile('hello.txt', combined, (err) => {
 if (err) throw err;
 console.log('File saved with concatenated buffer content');
});
