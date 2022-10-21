const express = require('express');

const app = express();
const PORT = 3000;

app.use((request, response) => {
  response.send('Ola, PW1!');
});

app.listen(PORT, () => console.log(`App executando na porta ${PORT}`));
