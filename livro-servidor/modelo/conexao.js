const banco = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

banco.connect("mongodb://localhost:27017/livro", options);

module.exports = banco;
