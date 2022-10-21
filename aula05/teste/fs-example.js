const fs = require('fs');

const options = { encoding: 'utf-8' };

fs.readFile('test.txt', options, (err, data) => {
  if (err) {
    console.log('Ocorreu um erro ao ler o arquivo.');
    return;
  }

  console.log(data.match(/l/gi).length + ' letras "l"');
});

console.log('Olá, PW1!');
