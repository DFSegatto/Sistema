const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
    const { nome, email, mensagem } = req.body;
    console.log('Mensagem de contato recebida:', { nome, email, mensagem });
    res.status(200).json({ message: 'Mensagem recebida com sucesso' });
});

module.exports = router;
