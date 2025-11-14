const fs = require('fs');
function readFileAsync(path) {
 fs.readFile(path, 'utf8', (err, data) => {
 if (err) {
 console.error('Error reading file:', err.message);
 return;
 }
 console.log('File contents:', data);
 });
}
readFileAsync('nonexistent.txt');
