const express = require('express');
const routes = express.Router(); // Router é responsável pelas rotas dentro do express

routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes; // Exportar todas as rotas do arquivo, para que a aplicação conheça as rotas