const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // true → query object
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/search' && req.method === 'GET') {
        const searchTerm = query.q || 'Nothing';
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`You searched for: ${searchTerm}`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

server.listen(3012, () => {
    console.log('Server running at http://localhost:3012');
});
