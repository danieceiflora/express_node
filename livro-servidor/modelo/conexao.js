const banco = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

banco.connect("mongodb://localhost:27017/livro", options)
    .then(() => console.log('Conectado ao banco com sucesso!'))
    .catch((err) => console.log('Erro ao conectar ao banco: ', err));

module.exports = banco;

