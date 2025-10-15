const http = require('http');

const server = http.createServer((req, res) => {
  
  // Routing
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  } 
  else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is About Page');
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Error: Page Not Found');
  }

});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
