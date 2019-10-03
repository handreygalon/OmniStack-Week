const express = require('express'); // import an external dependency
const mongoose = require('mongoose');
const routes = require('./routes') // Importar as rotas (utiliza caminho relativo) (../ -> volta pasta)

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-zqrfz.mongodb.net/db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/*
Params:
1) user route (Ex: localhost:3333) 
2) function (
    req -> request (all info that user is sending to the application), 
    res -> response (returns a response to the application)
    )

-> req.query -> Acessar query params (para filtros)
-> req.params = Acessar route params (para edição, delete)
-> req.body = Acessar para corpo da requisição (para criação e edição de registros)
*/

/*app.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});

app.put('/users:id', (req, res) => {
    return res.json({ id: req.params.id });
});*/

app.use(express.json()); // Por padrão o express não entende requisição em formato JSON, para isso, utilizo este comando
/*app.post('/users', (req, res) => {
    return res.json(req.body);
});*/

app.use(routes);

app.listen(3333);