const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`Requisição para ${req.originalUrl}`);
  next();
});

app.use((req, res, next) => {
  res.send('Olá, PW1!');
});

app.listen(3000, () => console.log('Aplicação executando...'));
