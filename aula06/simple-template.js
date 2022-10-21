const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(morgan('short'));

app.get('/', (request, response) => {
  response.render('home', {
    message: 'Paulo',
  });
});

app.get('/hello', (request, response) => {
  response.send('Welcome to my page!');
});

app.get('/previsao', (request, response) => {
  response.send('A previsão é de tempo firme.');
});

app.listen(PORT, () => console.log(`App executando na porta ${PORT}`));
