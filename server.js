const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to the homepage!');
    } else if (req.method === 'GET' && req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About us page');
    } else if (req.method === 'POST' && req.url === '/submit') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Form submitted!');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Page not found');
    }
  });  

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});