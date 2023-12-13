const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Handling incoming request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('My name is Nimisha\n');
});

// Listen on port 4000
server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});
