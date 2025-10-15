const http = require('http');

const server = http.createServer((req, res) => {
    try {
        if (req.url === '/home' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to Home Page!');
        } else if (req.url === '/error') {
            throw new Error('Something went wrong!');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    } catch (err) {
        console.error('Request error:', err.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
    }
});

server.on('error', (err) => {
    console.error('Server error:', err.message);
});

server.listen(3015, () => {
    console.log('Server running at http://localhost:3015');
});
