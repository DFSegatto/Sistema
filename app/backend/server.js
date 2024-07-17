const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const contactRoutes = require('./src/routes/contactRoutes'); 
const Usuario = require('./src/models/usuario');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Conectar ao banco de dados e sincronizar
sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
}).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
});

app.use('/api', usuarioRoutes);
app.use('/api', contactRoutes); 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
