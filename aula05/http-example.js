const http = require('http');

function hello(request, response) {
  console.log('Requisição para ', request.url);
  response.end('Olá PW1!');
}

const server = http.createServer(hello);
server.listen(3000);
