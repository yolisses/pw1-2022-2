const url = require('url');

const parsedUrl = url.parse('http://www.ifpb.edu.br/search/q?teste=ifpb');

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.query);
