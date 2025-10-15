const http = require('http');

const server = http.createServer((req, res) => {
  
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end(`405 Method Not Allowed: ${req.method} is not supported`);
    return; // stop further processing
  }

  // Routing for GET requests
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  } 
  else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

});

const PORT = 3006;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
