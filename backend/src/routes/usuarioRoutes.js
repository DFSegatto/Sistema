const express = require('express');
const {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
} = require('../controllers/usuarioController');
const router = express.Router();

router.post('/usuarios', createUser);
router.post('/login', loginUser);
router.put('/usuarios/:id', updateUser);
router.delete('/usuarios/:id', deleteUser);
router.get('/usuarios', getAllUsers);
router.get('/usuarios/:id', getUserById);

module.exports = router;
