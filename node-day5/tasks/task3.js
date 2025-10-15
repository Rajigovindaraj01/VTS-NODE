const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/text') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is plain text');
  } 
  else if (req.url === '/html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Hello HTML!</h1><p>This is a paragraph.</p>`);
  } 
  else if (req.url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Hello JSON!", status: 200 }));
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
