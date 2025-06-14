const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao obter livros' });
  }
});

router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    const resultado = await incluir(livro);
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo;
    await excluir(codigo);
    res.status(200).json({ message: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao excluir livro' });
  }
});

module.exports = router;

