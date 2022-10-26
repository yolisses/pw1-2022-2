const express = require("express");
const path = require("path");

const app = express();
const staticPath = path.resolve(__dirname, "static");

app.use(express.static(staticPath));

// modificando o caminho dos arquivos estáticos para rotas específicas
const picturesPath = path.resolve(__dirname, "pictures");
app.use('/pictures', express.static(picturesPath));

// servindo um arquivo estático específico
app.get("/users/:userid/profile_photo", (req, res) => {
    res.sendFile(getProfilePhotoPath(req.params.userid));
});

app.use((request, response) => {
    response.type("text/plain");
    response.send("Parece que você não queria um arquivo estático...");
});

app.listen(3000);
