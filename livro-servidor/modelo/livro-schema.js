const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    codEditora: { type: String, required: true },
    titulo: { type: String, required: true },
    resumo: { type: String, required: true },
    autores: { type: Array, required: true },
});

module.exports = banco.model('Livro', LivroSchema);

