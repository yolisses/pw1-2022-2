const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(morgan('short'));

app.use((request, response, next) => {
  const min = new Date().getMinutes();
  if (min % 2 == 0) {
    console.log('Usuário autenticado! Prosseguindo...');
    next();
    return;
  } else {
    response.status(403).send('Usuário não está autenticado.');
  }
});

app.use((request, response, next) => {
  response.send('Ola, PW1!');
});

app.listen(PORT, () => console.log(`App executando na porta ${PORT}`));
