const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

// Função para criar um usuário
const createUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        console.log('Tentando criar usuário:', { nome, email });
        const hashedPassword = await bcrypt.hash(senha, 10);
        const newUser = await Usuario.create({ nome, email, senha: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

// Função para fazer login do usuário
const loginUser = async (req, res) => {
    const { email, senha } = req.body;

    try {
        console.log('Tentando fazer login para:', email);
        const user = await Usuario.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'Email ou senha inválidos' });
        }

        const isMatch = await bcrypt.compare(senha, user.senha);
        if (!isMatch) {
            return res.status(400).json({ error: 'Email ou senha inválidos' });
        }

        const token = jwt.sign({ id: user.id }, 'seu_segredo_jwt', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};

// Função para atualizar um usuário
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const user = await Usuario.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const hashedPassword = senha ? await bcrypt.hash(senha, 10) : user.senha;
        user.nome = nome;
        user.email = email;
        user.senha = hashedPassword;
        await user.save();

        res.json(user);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

// Função para deletar um usuário
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Usuario.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
};

// Função para obter todos os usuários
const getAllUsers = async (req, res) => {
    try {
        const users = await Usuario.findAll();
        res.json(users);
    } catch (error) {
        console.error('Erro ao obter usuários:', error);
        res.status(500).json({ error: 'Erro ao obter usuários' });
    }
};

// Função para obter um usuário por ID
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Usuario.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(user);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
};

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
};
