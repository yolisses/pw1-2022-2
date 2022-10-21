const http = require('http');

function requestHandler(request, response) {
  console.log(`Uma nova requisição para ${request.url}`);
  response.end('Olá, PW1!');
}

const server = http.createServer(requestHandler);

server.listen(3000);
