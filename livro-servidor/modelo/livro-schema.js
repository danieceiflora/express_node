const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: Number, required: true },
    editora: { type: String, required: true }
});

module.exports = banco.model('Livro', LivroSchema);

