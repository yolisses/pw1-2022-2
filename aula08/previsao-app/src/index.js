const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
const capitais = [
    'ARACAJU', 'BELEM', 'BELO HORIZONTE', 'BOA VISTA', 'BRASILIA',
    'CAMPO GRANDE', 'CUIABA', 'CURITIBA', 'FLORIANOPOLIS',
    'FORTALEZA', 'GOIANIA', 'JOAO PESSOA', 'MACAPA', 'MACEIÓ',
    'MANAUS', 'NATAL', 'PALMAS', 'PORTO ALEGRE', 'PORTO VELHO',
    'RECIFE', 'RIO BRANCO', 'RIO DE JANEIRO', 'SALVADOR',
    'SAO LUIS', 'SAO PAULO', 'TERESINA', 'VITORIA'
];

app.use(logger('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', (req, res) => res.render('index'));

app.get('/:capital', (req, res) => {
    const capital = capitais.find(el => el === req.params.capital);
    if (capital) {
        
    }
});

app.listen(3000, () => console.log('App executando...'));
