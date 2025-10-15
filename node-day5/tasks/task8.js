const http = require('http');

const server = http.createServer((req, res) => {
  
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

  if (req.method === 'POST' && req.url === '/api/data') {
    let body = '';

    // Collect data chunks
    req.on('data', chunk => {
      body += chunk;
    });

    // End of data
    req.on('end', () => {
      try {
        const data = JSON.parse(body); // parse JSON
        console.log('Received Data:', data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Data received successfully', received: data }));
      } 
      catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });

  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

});

const PORT = 3010;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
