const express = require('express');

const app = express();

app.get('/busca', (request, response) => {
    const consulta = request.query.q;
    const consulta2 = request.query.teste;
    response.send(`Sua consulta foi: ${consulta + ' ' + consulta2}`);
});

app.use((request, response) => {
    response.status(404).send('Página não encontrada!');
});

app.listen(3000);
