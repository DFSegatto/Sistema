const express = require('express');
const { createUser, loginUser, updateUser, deleteUser, getAllUsers } = require('../controllers/usuarioController');
const router = express.Router();

router.post('/usuarios', createUser);
router.post('/login', loginUser);
router.put('/usuarios/:id', updateUser);
router.delete('/usuarios/:id', deleteUser); // Adicione esta linha para a exclusão de usuário
router.get('/usuarios', getAllUsers); // Adicione esta linha para listar todos os usuários

module.exports = router;