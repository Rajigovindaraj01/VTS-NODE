const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/home' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome Home!</h1>');
    } else {
        // Serve custom 404 HTML
        const filePath = path.join(__dirname, '404.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

server.listen(3016, () => {
    console.log('Server running at http://localhost:3016');
});
