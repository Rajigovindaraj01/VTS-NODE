const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home' && req.method === 'GET') {
        // HTML illa, plain text
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Home Page!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3013, () => {
    console.log('Server running at http://localhost:3013');
});
