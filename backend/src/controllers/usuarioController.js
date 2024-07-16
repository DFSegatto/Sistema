const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = 'your_jwt_secret'; // Você deve usar uma variável de ambiente para o segredo na produção

const createUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = bcrypt.hashSync(senha, 8);

  try {
    const newUser = await db.Usuario.create({ nome, email, senha: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create user', details: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await db.Usuario.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = bcrypt.compareSync(senha, user.senha);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Unable to login user', details: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  const hashedPassword = senha ? bcrypt.hashSync(senha, 8) : undefined;

  try {
    const user = await db.Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updatedUser = await user.update({
      nome: nome || user.nome,
      email: email || user.email,
      senha: hashedPassword || user.senha,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Unable to update user', details: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db.Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Unable to delete user', details: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await db.Usuario.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: 'Unable to fetch users' });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
