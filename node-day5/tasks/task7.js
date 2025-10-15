const http = require('http');

const items = [
  { id: 1, name: "Apple", price: 50 },
  { id: 2, name: "Banana", price: 20 },
  { id: 3, name: "Orange", price: 30 }
];

const server = http.createServer((req, res) => {

  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

  if (req.method === 'GET' && req.url === '/api/items') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(items));
  } 
  else if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

});

const PORT = 3007;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
