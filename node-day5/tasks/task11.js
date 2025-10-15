const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home' && req.method === 'GET') {
        res.setHeader('X-Custom-Header', 'MyHeaderValue');
        res.setHeader('Content-Type', 'text/plain');
        
        res.writeHead(200); 
        res.end('Welcome!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3014, () => {
    console.log('Server running at http://localhost:3014');
});
