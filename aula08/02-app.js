const express = require("express");

const app = express();

app.get(/^\/pw1\/(\d+)$/, (request, response) => {
    const id = request.params[0];
    response.send(`Bem-vindo(a) a pagina de PW1! Seu numero de usuario e ${id}!`);
});


app.use((request, response) => {
    response.status(404).send("Página não encontrada!");
});

app.listen(3000);
