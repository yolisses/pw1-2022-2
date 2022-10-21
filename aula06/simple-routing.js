const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(morgan('short'));

app.get('/', (request, response) => {
  response.send('Boas-vindas à minha página!');
});

app.get('/hello', (request, response) => {
  response.send('Welcome to my page!');
});

app.get('/previsao', (request, response) => {
  response.send('A previsão é de tempo firme.');
});

app.listen(PORT, () => console.log(`App executando na porta ${PORT}`));
