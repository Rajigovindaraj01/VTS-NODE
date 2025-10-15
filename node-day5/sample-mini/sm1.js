const http = require('http');
const server = http.createServer((req, res) => {
 if (req.method === 'GET') {
 if (req.url === '/') {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('<h1>Welcome to the Home Page</h1>');
 } else if (req.url === '/about') {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('<h1>About Us</h1><p>This is the about page.</p>');
 } else if (req.url === '/contact') {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('<h1>Contact Us</h1><p>Email: contact@example.com</p>');
 } else {
 res.writeHead(404, {'Content-Type': 'text/html'});
 res.end('<h1>404 Not Found</h1>');
 }
 } else {
 res.writeHead(405, {'Content-Type': 'text/html'});
 res.end(`<h1>Method ${req.method} Not Allowed</h1>`);
 }
});
const PORT = 3020;
server.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}/`);
});