const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
const staticPath = path.resolve(__dirname, 'static');

app.use(express.static(staticPath));
app.use(logger('tiny'));

app.use('/teste', (req, res, next) => {
  res.send('teste');
});

app.use((req, res, next) => {
  next(new Error('Arquivo não encontrado'));
});

app.use((err, req, res, next) => {
  console.log(`Ocorreu um erro ${err}`);
  res.status(500).send('Erro do servidor');
});

app.listen(3000, () => console.log('Aplicação executando...'));
