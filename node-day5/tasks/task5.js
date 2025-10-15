const http = require('http');

const server = http.createServer((req, res) => {
  
  // Log method and URL
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  
  // Simple routing
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } 
  else if (req.url === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

});

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
