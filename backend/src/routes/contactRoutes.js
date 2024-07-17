const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
    const { nome, email, mensagem } = req.body;
    // Aqui você pode adicionar a lógica para processar a mensagem, como salvar em um banco de dados ou enviar um email
    console.log('Mensagem de contato recebida:', { nome, email, mensagem });
    res.status(200).json({ message: 'Mensagem recebida com sucesso' });
});

module.exports = router;
