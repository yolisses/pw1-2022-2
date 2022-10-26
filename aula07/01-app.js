const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
const staticPath = path.resolve(__dirname, 'static');

app.use(express.static(staticPath));

app.use((req, res, next) => {
  console.log(`Requisição para ${req.originalUrl}`);
  next();
});

app.use((req, res, next) => {
  res.send('Arquivo não encontrado!');
});

app.listen(3000, () => console.log('Aplicação executando...'));
