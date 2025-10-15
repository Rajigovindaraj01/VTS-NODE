const http = require('http');
const users = [
 { id: 1, name: 'Alice' },
 { id: 2, name: 'Bob' }
];
const products = [
 { id: 1, name: 'Laptop' },
 { id: 2, name: 'Phone' }
];
const server = http.createServer((req, res) => {
 if (req.method === 'GET') {
 if (req.url === '/api/users') {
 res.writeHead(200, {'Content-Type': 'application/json'});
 res.end(JSON.stringify(users));
 } else if (req.url === '/api/products') {
 res.writeHead(200, {'Content-Type': 'application/json'});
 res.end(JSON.stringify(products));
 } else {
 res.writeHead(404, {'Content-Type': 'application/json'});
 res.end(JSON.stringify({ error: 'Not Found' }));
 }
 } else {
 res.writeHead(405, {'Content-Type': 'application/json'});
 res.end(JSON.stringify({ error: `Method ${req.method} Not Allowed` }));
 }
});
const PORT = 3021;
server.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}/`);
});
