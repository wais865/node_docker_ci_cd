const http = require('node:http');

function add(a, b) {
  return a + b;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ result: add(2, 3) }));
});

if (require.main === module) {
  server.listen(3000, () => console.log('Server running on port 3000'));
}


module.exports = { add };