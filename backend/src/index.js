const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-agaht.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); /* algo que vai ser válido pra toda aplicação */
app.use(routes);

// métodos http GET, POST, PUT , DELETE
// Tipos de parâmetros
// Query params: request.query (filtros. ordenação, paginação, ...)
// ROute params: request.params (identificar um recurso na alteração  ou remoção)
// BOdy: request.doby (dados para a criação ou alteração de um registro)

// Mongo DB (banco não-relacional)

app.listen(3333);