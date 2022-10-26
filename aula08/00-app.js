const express = require('express');

const app = express();

app.get('/pw2', (request, response) => {
    response.send('Bem-vindo(a) a pagina de PW1!');
});

app.use((request, response) => {
    response.status(404).send('Página não encontrada!');
});

app.listen(3000);
